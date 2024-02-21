export interface IEnrollmentProps {
  id?: number;
  studentId: number;
  classId: number;
  enrollmentDate: Date;
}

export class Enrollment implements IEnrollmentProps {
  id?: number | undefined;
  studentId: number;
  classId: number;
  enrollmentDate: Date;

  constructor(enrollmentProps?: IEnrollmentProps) {
    if (enrollmentProps) {
      Object.assign(this, enrollmentProps);
    }
  }
}
