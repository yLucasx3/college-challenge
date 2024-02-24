import { Student, IStudentProps } from "@/domain/entities/student.entity";
import {
  IStudentPropsWithEnrollment,
  IStudentRepository,
} from "@/domain/repositories/student.repository";
import {
  IPaginatedRequest,
  IPaginatedResponse,
} from "@/domain/shared/paginated-types";
import { prisma } from "../../configs/prisma";
import { StudentMappper } from "../mappers/student.mapper";
import { EnrollmentMappper } from "../mappers/enrollment.mapper";
import { ClassMappper } from "../mappers/class.mapper";
import { CourseMapper } from "../mappers/course.mapper";

export class PostgreSQLStudentRepository implements IStudentRepository {
  async list(
    options: IPaginatedRequest
  ): Promise<IPaginatedResponse<IStudentPropsWithEnrollment>> {
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
                  course: {},
                },
              },
            },
          },
        },
        skip: offset ?? 0,
        take: limit ?? 10,
        ...(filter ? { where: filterOptions } : {}),
        ...(orderBy ? { orderBy: { [orderBy]: orderDirection || "asc" } } : {}),
      }),
      prisma.student.count(),
    ]);

    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    return {
      items: students.map((student) => {
        const mappedStudent = StudentMappper.fromDatabase(student);
        const mappedEnrollment = EnrollmentMappper.fromDatabase(
          student.enrollment
        );
        const mappedClass = ClassMappper.fromDatabase(student.enrollment.class);
        const mappedCourse = CourseMapper.fromDatabase(
          student.enrollment.class.course
        );

        return {
          ...mappedStudent,
          enrollment: {
            ...mappedEnrollment,
            class: {
              ...mappedClass,
              course: {
                ...mappedCourse,
              },
            },
          },
        };
      }),
      pageInfos: {
        totalItems,
        totalPages,
        currentPage,
      },
    };
  }

  async show(id: number): Promise<Student | null> {
    const findedStudent = await prisma.student.findUnique({ where: { id } });

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
