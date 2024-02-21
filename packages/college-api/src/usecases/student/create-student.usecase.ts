import { Student } from "../../domain/entities/student.entity";
import { IStudentRepository } from "../../domain/repositories/student.repository";

export class CreateStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(student: Student): Promise<Student> {
    const { full_name, email, academicRecord, document } = student;

    const newStudent = await this.studentRepository.create({
      full_name,
      email,
      academicRecord,
      document,
    });

    return newStudent;
  }
}
