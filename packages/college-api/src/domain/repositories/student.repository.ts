import { IClassProps } from "../entities/class.entity";
import { ICourseProps } from "../entities/course.entity";
import { IEnrollmentProps } from "../entities/enrollment.entity";
import { IStudentProps, Student } from "../entities/student.entity";
import {
  IPaginatedRequest,
  IPaginatedResponse,
} from "../shared/paginated-types";

type IClassPropsWithCourseProps = IClassProps & { course: ICourseProps };

type IEnrollmentPropsWithClass = IEnrollmentProps & {
  class: IClassPropsWithCourseProps;
};

export type IStudentPropsWithEnrollment = IStudentProps & {
  enrollment: IEnrollmentPropsWithClass;
};

export interface IStudentRepository {
  list(options: IPaginatedRequest): Promise<IPaginatedResponse<Student>>;
  show(id: number): Promise<Student | null>;
  showByDocument(document: string): Promise<Student | null>;
  create(student: IStudentProps): Promise<Student>;
  update(id: number, student: IStudentProps): Promise<Student>;
  delete(id: number): Promise<void>;
}
