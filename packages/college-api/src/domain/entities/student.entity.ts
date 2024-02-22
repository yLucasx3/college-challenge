import { BaseEntity, IBaseProps } from "./base.entity";

export type IStudentProps = {
  id?: number;
  full_name: string;
  email: string;
  academicRecord: string;
  document: string;
} & IBaseProps;

export class Student
  extends BaseEntity<IStudentProps>
  implements IStudentProps
{
  readonly id?: number;
  full_name: string;
  email: string;
  academicRecord: string;
  document: string;

  show() {
    return `${this.full_name}-${this.email}`;
  }
}
