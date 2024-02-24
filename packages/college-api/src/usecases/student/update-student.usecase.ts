import { IStudentProps, Student } from "@/domain/entities/student.entity";
import { StudentNotFoundError } from "@/domain/errors/student/student-not-found.error";
import { IStudentRepository } from "@/domain/repositories";

export class UpdateStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}
  async execute(studentId: number, student: IStudentProps): Promise<Student> {
    const findedStudent = await this.studentRepository.show(studentId);

    if (!findedStudent?.id) {
      throw new StudentNotFoundError();
    }

    const updatedStudent = await this.studentRepository.update(
      studentId,
      student
    );

    return updatedStudent;
  }
}
