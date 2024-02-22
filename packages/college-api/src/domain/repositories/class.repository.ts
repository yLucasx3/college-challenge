import { Class, IClassProps } from "../entities/class.entity";

export interface IClassRepository {
  show(id: number): Promise<Class | null>;
  create(clazz: IClassProps): Promise<Class>;
}
