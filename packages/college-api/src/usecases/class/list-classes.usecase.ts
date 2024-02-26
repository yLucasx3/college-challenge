import { Class } from "@/domain/entities/class.entity";
import { IClassRepository } from "@/domain/repositories";
import {
  IPaginatedRequest,
  IPaginatedResponse,
} from "@/domain/shared/paginated-types";

export class ListClassesUseCase {
  constructor(private classRepository: IClassRepository) {}

  async execute(
    options: IPaginatedRequest
  ): Promise<IPaginatedResponse<Class>> {
    const classes = await this.classRepository.list(options);

    return classes;
  }
}
