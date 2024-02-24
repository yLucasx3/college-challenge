import { StudentNotFoundError } from "@/domain/errors/student/student-not-found.error";
import { IStudentRepository } from "@/domain/repositories";

export class DeleteStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(studentId: number): Promise<void> {
    const findedStudent = await this.studentRepository.show(studentId);

    if (!findedStudent?.id) {
      throw new StudentNotFoundError();
    }

    await this.studentRepository.delete(findedStudent.id);
  }
}
