import { IStudentProps, Student } from "@/domain/entities/student.entity";
import { Optional } from "@/domain/shared/make-optional";
import { PrismaStudent } from "../../configs/prisma/database-types";
import { withTimestamps } from "@/infra/utils/with-timestamps.mapper";
import { Email } from "@/domain/validation/invalid-email.validation";
import { Document } from "@/domain/validation/invalid-document.validation";
import { FullName } from "@/domain/validation/invalid-full-name.validation";

export namespace StudentMappper {
  export const toDatabase = (
    student: IStudentProps | Partial<IStudentProps>
  ): Optional<PrismaStudent, "id"> => {
    return withTimestamps({
      ...student,
      fullName: student?.fullName?.getValue(),
      email: student?.email?.getValue(),
      document: student?.document?.getValue(),
      academicRecord: student.academicRecord!,
      enrollmentId: student.enrollmentId!,
    });
  };

  export const fromDatabase = (student: PrismaStudent): Student => {
    return new Student(
      withTimestamps({
        ...student,
        fullName: new FullName(student.fullName),
        email: new Email(student.email),
        document: new Document(student.document),
      })
    );
  };
}
