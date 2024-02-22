import { Class, IClassProps } from "@/domain/entities/class.entity";
import { IClassRepository } from "@/domain/repositories";
import { prisma } from "../../configs/prisma";
import { ClassMappper } from "../mappers/class.mapper";

export class PostgreSQLClassRepository implements IClassRepository {
  async show(id: number): Promise<Class | null> {
    const findedClass = await prisma.class.findUnique({ where: { id } });

    if (!findedClass) return null;

    return ClassMappper.fromDatabase(findedClass);
  }
  async create(clazz: IClassProps): Promise<Class> {
    const newClass = await prisma.class.create({
      data: ClassMappper.toDatabase(clazz),
    });

    return ClassMappper.fromDatabase(newClass);
  }
}
