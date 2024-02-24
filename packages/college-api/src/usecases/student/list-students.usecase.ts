import { IStudentProps } from "@/domain/entities/student.entity";
import { IStudentRepository } from "@/domain/repositories";
import {
  IPaginatedRequest,
  IPaginatedResponse,
} from "@/domain/shared/paginated-types";

export class ListStudentsUseCase {
  constructor(private studentRepository: IStudentRepository) {}
  async execute(options: IPaginatedRequest): Promise<IPaginatedResponse<any>> {
    const students = await this.studentRepository.list(options);

    return students;
  }
}
