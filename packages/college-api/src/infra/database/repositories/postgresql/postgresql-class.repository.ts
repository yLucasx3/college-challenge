import { Class, IClassProps } from "@/domain/entities/class.entity";
import { IClassRepository } from "@/domain/repositories";
import { prisma } from "../../configs/prisma";
import { ClassMappper } from "../mappers/class.mapper";
import {
  IPaginatedRequest,
  IPaginatedResponse,
} from "@/domain/shared/paginated-types";

export class PostgreSQLClassRepository implements IClassRepository {
  async list(options: IPaginatedRequest): Promise<IPaginatedResponse<Class>> {
    const { offset, limit, orderBy, orderDirection, filter } = options;

    let filterOptions = filter;

    if (filter?.name) {
      filterOptions = { name: filter.name };
    }

    const [classes, totalItems] = await Promise.all([
      prisma.class.findMany({
        include: {
          course: {
            select: {
              id: true,
              name: true,
              description: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
        skip: offset,
        take: limit,
        ...(filter ? { where: filterOptions } : {}),
        ...(orderBy ? { orderBy: { [orderBy]: orderDirection || "asc" } } : {}),
      }),
      prisma.class.count(),
    ]);

    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    return {
      items: classes.map((clazz) => ClassMappper.fromDatabase(clazz)),
      pageInfos: {
        totalItems,
        totalPages,
        currentPage,
      },
    };
  }

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
