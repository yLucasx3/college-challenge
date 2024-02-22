import { IStudentProps, Student } from "@/domain/entities/student.entity";
import { Optional } from "@/domain/shared/make-optional";
import { PrismaStudent } from "../../configs/prisma/database-types";

export namespace StudentMappper {
  export const toDatabase = (
    student: IStudentProps
  ): Optional<PrismaStudent, "id"> => {
    return {
      id: student.id,
      full_name: student.full_name,
      email: student.full_name,
      academicRecord: student.academicRecord,
      document: student.document,
      createdAt: student.createdAt,
      updatedAt: student.updatedAt,
    };
  };

  export const fromDatabase = (student: PrismaStudent): Student => {
    return new Student({
      id: student.id,
      full_name: student.full_name,
      email: student.full_name,
      academicRecord: student.academicRecord,
      document: student.document,
      createdAt: student.createdAt,
      updatedAt: student.updatedAt,
    });
  };
}
