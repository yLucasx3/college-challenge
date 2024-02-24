import { User, IUserProps } from "@/domain/entities/user.entity";
import { IUserRepository } from "@/domain/repositories/user.repository";
import { prisma } from "../../configs/prisma";
import { UserMapper } from "../mappers/user.mapper";

export class PostgreSQLUserRepository implements IUserRepository {
  async show(id: number): Promise<User | null> {
    const findedUser = await prisma.user.findUnique({ where: { id } });

    if (!findedUser) return null;

    return UserMapper.fromDatabase(findedUser);
  }

  async showByName(name: string): Promise<User | null> {
    const findedUser = await prisma.user.findUnique({ where: { name } });

    if (!findedUser) return null;

    return UserMapper.fromDatabase(findedUser);
  }

  async create(user: IUserProps): Promise<User> {
    const newUser = await prisma.user.create({
      data: UserMapper.toDatabase(user),
    });

    return UserMapper.fromDatabase(newUser);
  }
}
