import { Optional } from "@/domain/shared/make-optional";
import { withTimestamps } from "@/infra/utils/with-timestamps.mapper";
import { Course, ICourseProps } from "@/domain/entities/course.entity";
import { PrismaCourse } from "../../configs/prisma/database-types";

export namespace CourseMapper {
  export const toDatabase = (
    course: ICourseProps
  ): Optional<PrismaCourse, "id"> => {
    return withTimestamps(course);
  };

  export const fromDatabase = (course: PrismaCourse): Course => {
    return new Course(withTimestamps(course));
  };
}
