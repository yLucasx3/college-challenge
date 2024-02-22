import { Student } from "@/domain/entities/student.entity";

interface CreateStudentRequestProps {
  full_name: string;
  email: string;
  ra: string;
  cpf: string;
}

export class CreateStudentRequestDTO {
  map(request: CreateStudentRequestProps): Student {
    const student = new Student();

    student.full_name = request.full_name;
    student.email = request.email;
    student.academicRecord = request.ra;
    student.document = request.cpf;

    return student;
  }
}

export class CreateStudentResponseDTO {
  full_name: string;
  email: string;
  ra: string;
  cpf: string;

  map(student: Student): CreateStudentResponseDTO {
    this.full_name = student.full_name;
    this.email = student.email;
    this.ra = student.academicRecord;
    this.cpf = student.document;

    return this;
  }
}
