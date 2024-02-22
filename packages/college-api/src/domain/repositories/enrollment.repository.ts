import { Enrollment, IEnrollmentProps } from "../entities/enrollment.entity";

export interface IEnrollmentRepository {
  create(enrollment: IEnrollmentProps): Promise<Enrollment>;
}
