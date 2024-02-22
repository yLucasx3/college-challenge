import { Optional } from "@/domain/shared/make-optional";
import { PrismaEnrollment } from "../../configs/prisma/database-types";
import {
  Enrollment,
  IEnrollmentProps,
} from "@/domain/entities/enrollment.entity";
import { withTimestamps } from "@/infra/utils/with-timestamps.mapper";

export namespace EnrollmentMappper {
  export const toDatabase = (
    enrollment: IEnrollmentProps
  ): Optional<PrismaEnrollment, "id"> => {
    return withTimestamps<IEnrollmentProps>(enrollment);
  };

  export const fromDatabase = (enrollment: PrismaEnrollment): Enrollment => {
    return new Enrollment(withTimestamps(enrollment));
  };
}
