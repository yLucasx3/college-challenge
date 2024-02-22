import { Course, ICourseProps } from "../entities/course.entity";

export interface ICourseRepository {
  create(course: ICourseProps): Promise<Course>;
}
