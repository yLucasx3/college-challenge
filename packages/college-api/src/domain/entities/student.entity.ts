import { Document } from "../validation/invalid-document.validation";
import { Email } from "../validation/invalid-email.validation";
import { FullName } from "../validation/invalid-full-name.validation";
import { BaseEntity, IBaseProps } from "./base.entity";
import { IEnrollmentProps } from "./enrollment.entity";

export type IStudentProps = {
  id?: number;
  fullName: FullName;
  email: Email;
  document: Document;
  academicRecord?: string;
  enrollmentId?: number;
} & IBaseProps;

export class Student
  extends BaseEntity<IStudentProps>
  implements IStudentProps
{
  readonly id?: number;
  fullName: FullName;
  email: Email;
  document: Document;
  enrollmentId?: number;
  academicRecord?: string;
  enrollment?: IEnrollmentProps;

  constructor(props?: IStudentProps) {
    super(props);

    Object.assign(this, props);
  }

  generateAcademicRecord(options: {
    enrollmentId: number;
    courseId: number;
    year: number;
  }) {
    this.academicRecord = `${options.enrollmentId}${options.courseId}${options.year}`;
    return this.academicRecord;
  }
}
