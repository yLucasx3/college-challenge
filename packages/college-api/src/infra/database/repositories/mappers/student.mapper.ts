import { IStudentProps, Student } from "@/domain/entities/student.entity";
import { Optional } from "@/domain/shared/make-optional";
import { PrismaStudent } from "../../configs/prisma/database-types";
import { withTimestamps } from "@/infra/utils/with-timestamps.mapper";

export namespace StudentMappper {
  export const toDatabase = (
    student: IStudentProps
  ): Optional<PrismaStudent, "id"> => {
    return withTimestamps({
      ...student,
      academicRecord: student.academicRecord!,
    });
  };

  export const fromDatabase = (student: PrismaStudent): Student => {
    return new Student(withTimestamps(student));
  };
}
