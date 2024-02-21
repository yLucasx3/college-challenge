export interface StudentProps {
  id?: number;
  full_name: string;
  email: string;
  academicRecord: string;
  document: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Student implements StudentProps {
  readonly id?: number;
  full_name: string;
  email: string;
  academicRecord: string;
  document: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(studentProps?: StudentProps) {
    if (studentProps) {
      Object.assign(this, studentProps);
    }
  }

  show() {
    return `${this.full_name}-${this.email}`;
  }
}
