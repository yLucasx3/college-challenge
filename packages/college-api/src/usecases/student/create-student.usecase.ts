import { Student } from "@/domain/entities/student.entity";
import { ClassNotFoundError } from "@/domain/errors/class/class-not-found.error";
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

    const newStudent = await this.studentRepository.create({
      fullName,
      email,
      document,
    });

    const findedClass = await this.classRepository.show(classId);

    if (!findedClass) {
      throw new ClassNotFoundError();
    }

    await this.enrollmentRepository.create({
      classId: findedClass.id!,
      studentId: newStudent.id!,
    });

    return newStudent;
  }
}
