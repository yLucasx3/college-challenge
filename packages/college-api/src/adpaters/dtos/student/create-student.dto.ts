import { Student } from "@/domain/entities/student.entity";
import { Document } from "@/domain/validation/invalid-document.validation";
import { Email } from "@/domain/validation/invalid-email.validation";
import { FullName } from "@/domain/validation/invalid-full-name.validation";

interface CreateStudentRequestProps {
  fullName: string;
  email: string;
  cpf: string;
  classId: number;
}

export class CreateStudentRequestDTO {
  map(request: CreateStudentRequestProps): {
    student: Student;
    classId: number;
  } {
    const student = new Student();

    student.fullName = new FullName(request.fullName);
    student.email = new Email(request.email);
    student.document = new Document(request.cpf);

    return { student, classId: request.classId };
  }
}

export class CreateStudentResponseDTO {
  fullName: string;
  email: string;
  ra: string;
  cpf: string;
  enrollmentId: number;
  createdAt: Date;
  updatedAt: Date;

  map(student: Student): CreateStudentResponseDTO {
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
