import { BaseEntity, IBaseProps } from "./base.entity";

export type IEnrollmentProps = {
  id?: number;
  studentId: number;
  classId: number;
} & IBaseProps;

export class Enrollment
  extends BaseEntity<IEnrollmentProps>
  implements IEnrollmentProps
{
  id?: number;
  studentId: number;
  classId: number;
}
