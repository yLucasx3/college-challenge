import { BaseEntity, IBaseProps } from "./base.entity";

export type IStudentProps = {
  id?: number;
  fullName: string;
  email: string;
  document: string;
  academicRecord?: string;
} & IBaseProps;

export class Student
  extends BaseEntity<IStudentProps>
  implements IStudentProps
{
  readonly id?: number;
  fullName: string;
  email: string;
  document: string;
  academicRecord?: string;

  show() {
    return `${this.fullName}-${this.email}`;
  }
}
