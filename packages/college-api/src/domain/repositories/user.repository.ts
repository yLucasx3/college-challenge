import { IUserProps, User } from "../entities/user.entity";

export interface IUserRepository {
  show(id: number): Promise<User | null>;
  showByName(name: string): Promise<User | null>;
  create(user: IUserProps): Promise<User>;
  authenticate(name: string, password: string): Promise<boolean>;
}
