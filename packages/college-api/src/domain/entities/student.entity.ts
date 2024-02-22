export interface IStudentProps {
  id?: number;
  full_name: string;
  email: string;
  academicRecord: string;
  document: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Student implements IStudentProps {
  readonly id?: number;
  full_name: string;
  email: string;
  academicRecord: string;
  document: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(studentProps?: IStudentProps) {
    if (studentProps) {
      Object.assign(this, studentProps);
    }
  }

  show() {
    return `${this.full_name}-${this.email}`;
  }
}
