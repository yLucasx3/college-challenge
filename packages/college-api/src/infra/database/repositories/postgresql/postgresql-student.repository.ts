import { Student, IStudentProps } from "@/domain/entities/student.entity";
import { IStudentRepository } from "@/domain/repositories/student.repository";
import {
  IPaginatedRequest,
  IPaginatedResponse,
} from "@/domain/shared/paginated-types";
import { prisma } from "../../configs/prisma";
import { StudentMappper } from "../mappers/student.mapper";

export class PostgreSQLStudentRepository implements IStudentRepository {
  async list(options: IPaginatedRequest): Promise<IPaginatedResponse<Student>> {
    const { offset, limit, orderBy, orderDirection, filter } = options;

    let filterOptions = filter;

    if (filter?.name) {
      filterOptions = { name: filter.name };
    }

    const [students, totalItems] = await Promise.all([
      prisma.student.findMany({
        include: {
          enrollment: {
            include: {
              class: {
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
              },
            },
          },
        },
        skip: offset,
        take: limit,
        ...(filter ? { where: filterOptions } : {}),
        ...(orderBy ? { orderBy: { [orderBy]: orderDirection || "asc" } } : {}),
      }),
      prisma.student.count(),
    ]);

    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    return {
      items: students.map((student) => StudentMappper.fromDatabase(student)),
      pageInfos: {
        totalItems,
        totalPages,
        currentPage,
      },
    };
  }

  async show(id: number): Promise<Student | null> {
    const findedStudent = await prisma.student.findUnique({
      where: { id },
      include: {
        enrollment: {
          include: {
            class: {
              include: {
                course: {
                  select: { id: true, name: true, description: true },
                },
              },
            },
          },
        },
      },
    });

    if (!findedStudent) return null;

    return StudentMappper.fromDatabase(findedStudent);
  }

  async showByDocument(document: string): Promise<Student | null> {
    const findedStudend = await prisma.student.findUnique({
      where: { document },
    });

    if (!findedStudend) return null;

    return StudentMappper.fromDatabase(findedStudend);
  }

  async create(student: IStudentProps): Promise<Student> {
    const newStudent = await prisma.student.create({
      data: StudentMappper.toDatabase(student),
    });

    return StudentMappper.fromDatabase(newStudent);
  }

  async update(id: number, student: Partial<IStudentProps>): Promise<Student> {
    const updatedStudent = await prisma.student.update({
      where: { id },
      data: StudentMappper.toDatabase(student),
    });

    return StudentMappper.fromDatabase(updatedStudent);
  }

  async delete(id: number): Promise<void> {
    const deletedStudent = await prisma.student.delete({ where: { id } });
    deletedStudent;
  }
}
