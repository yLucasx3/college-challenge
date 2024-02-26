import { IEnrollmentProps } from "@/domain/entities/enrollment.entity";
import { Student } from "@/domain/entities/student.entity";

interface ShowStudentRequestProps {
  id: number;
}

export class ShowStudentRequestDTO {
  studentId: number;

  map(request: ShowStudentRequestProps): { studentId: number } {
    this.studentId = Number(request.id);

    return { studentId: this.studentId };
  }
}

export class ShowStudentResponseDTO {
  id: number;
  fullName: string;
  email: string;
  ra: string;
  cpf: string;
  enrollment: IEnrollmentProps;
  createdAt: Date;
  updatedAt: Date;

  map(student: Student): ShowStudentResponseDTO {
    this.id = student.id!;
    this.fullName = student.fullName.getValue();
    this.email = student.email.getValue();
    this.cpf = student.document.getValue();
    this.enrollment = student.enrollment!;
    this.ra = student.academicRecord!;
    this.createdAt = student.createdAt!;
    this.updatedAt = student.updatedAt!;

    return this;
  }
}
