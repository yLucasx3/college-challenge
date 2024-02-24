import { Student } from "@/domain/entities/student.entity";
import { Email } from "@/domain/validation/invalid-email.validation";
import { FullName } from "@/domain/validation/invalid-full-name.validation";

interface UpdateStudentRequestProps {
  fullName: string;
  email: string;
}

export class UpdateStudentRequestDTO {
  map(request: UpdateStudentRequestProps): Student {
    const student = new Student();

    student.fullName = new FullName(request.fullName);
    student.email = new Email(request.email);

    return student;
  }
}

export class UpdateStudentResponseDTO {
  fullName: string;
  email: string;
  ra: string;
  cpf: string;
  enrollmentId: number;
  createdAt: Date;
  updatedAt: Date;

  map(student: Student): UpdateStudentResponseDTO {
    this.fullName = student.fullName.getValue();
    this.email = student.email.getValue();
    this.cpf = student.document.getValue();
    this.enrollmentId = student.enrollmentId!;
    this.ra = student.academicRecord!;
    this.createdAt = student.createdAt!;
    this.updatedAt = student.updatedAt!;

    return this;
  }
}
