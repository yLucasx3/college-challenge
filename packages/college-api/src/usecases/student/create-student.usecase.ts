import { Student } from "@/domain/entities/student.entity";
import { ClassMissingIdError } from "@/domain/errors/class/class-missing-id.error";
import { ClassNotFoundError } from "@/domain/errors/class/class-not-found.error";
import { StudentAlreadyExistsError } from "@/domain/errors/student/student-already-exists.error";
import { StudentMissingPropertiesError } from "@/domain/errors/student/student-missing-properties.error";
import {
  IClassRepository,
  IEnrollmentRepository,
  IStudentRepository,
} from "@/domain/repositories";

export class CreateStudentUseCase {
  constructor(
    private studentRepository: IStudentRepository,
    private classRepository: IClassRepository,
    private enrollmentRepository: IEnrollmentRepository
  ) {}

  async execute(student: Student, classId: number): Promise<Student> {
    const { fullName, email, document } = student;

    if (!fullName || !email || !document) {
      throw new StudentMissingPropertiesError();
    }

    if (!classId) {
      throw new ClassMissingIdError();
    }

    const findedStudent = await this.studentRepository.showByDocument(
      document.getValue()
    );

    if (findedStudent?.id) {
      throw new StudentAlreadyExistsError();
    }

    console.log("PASSou aq");

    const findedClass = await this.classRepository.show(classId);

    if (!findedClass?.id) {
      throw new ClassNotFoundError();
    }

    const newEnrollment = await this.enrollmentRepository.create({
      classId: findedClass.id!,
    });

    const studentAcademicRecord = student.generateAcademicRecord({
      enrollmentId: newEnrollment.id!,
      courseId: findedClass.courseId,
      year: new Date().getFullYear(),
    });

    const newStudent = await this.studentRepository.create({
      fullName,
      email,
      document,
      enrollmentId: newEnrollment.id!,
      academicRecord: studentAcademicRecord,
    });

    return newStudent;
  }
}
