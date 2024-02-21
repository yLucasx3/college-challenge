export interface EnrollmentProps {
  id?: number;
  studentId: number;
  classId: number;
  enrollmentDate: Date;
}

export class Enrollment implements EnrollmentProps {
  id?: number | undefined;
  studentId: number;
  classId: number;
  enrollmentDate: Date;

  constructor(enrollmentProps?: EnrollmentProps) {
    if (enrollmentProps) {
      Object.assign(this, enrollmentProps);
    }
  }
}
