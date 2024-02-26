import { Student } from "@/domain/entities/student.entity";
import { StudentNotFoundError } from "@/domain/errors/student/student-not-found.error";
import { IStudentRepository } from "@/domain/repositories";

export class ShowStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(studentId: number): Promise<Student> {
    const findedStudent = await this.studentRepository.show(studentId);

    if (!findedStudent?.id) {
      throw new StudentNotFoundError();
    }

    return findedStudent;
  }
}
