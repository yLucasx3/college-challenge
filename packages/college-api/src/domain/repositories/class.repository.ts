import { Class, IClassProps } from "../entities/class.entity";
import {
  IPaginatedRequest,
  IPaginatedResponse,
} from "../shared/paginated-types";

export interface IClassRepository {
  list(options: IPaginatedRequest): Promise<IPaginatedResponse<Class>>;
  show(id: number): Promise<Class | null>;
  create(clazz: IClassProps): Promise<Class>;
}
