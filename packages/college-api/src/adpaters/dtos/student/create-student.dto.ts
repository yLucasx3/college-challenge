import { Student } from "@/domain/entities/student.entity";

interface CreateStudentRequestProps {
  fullName: string;
  email: string;
  ra: string;
  cpf: string;
}

export class CreateStudentRequestDTO {
  map(request: CreateStudentRequestProps): Student {
    const student = new Student();

    student.fullName = request.fullName;
    student.email = request.email;
    student.academicRecord = request.ra;
    student.document = request.cpf;

    return student;
  }
}

export class CreateStudentResponseDTO {
  fullName: string;
  email: string;
  ra: string;
  cpf: string;

  map(student: Student): CreateStudentResponseDTO {
    this.fullName = student.fullName;
    this.email = student.email;
    this.cpf = student.document;

    return this;
  }
}
