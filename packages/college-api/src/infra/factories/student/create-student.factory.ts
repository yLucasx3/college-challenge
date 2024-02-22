import { CreateStudentController } from "@/adpaters/controllers/student/create-student.controller";
import { PostgreSQLClassRepository } from "@/infra/database/repositories/postgresql/postgresql-class.repository";
import { PostgreSQLEnrollmentRepository } from "@/infra/database/repositories/postgresql/postgresql-enrollment.repository";
import { PostgreSQLStudentRepository } from "@/infra/database/repositories/postgresql/postgresql-student.repository";
import { CreateStudentUseCase } from "@/usecases/student/create-student.usecase";

const studentRepository = new PostgreSQLStudentRepository();
const classRepository = new PostgreSQLClassRepository();
const enrollmentRepository = new PostgreSQLEnrollmentRepository();
const useCase = new CreateStudentUseCase(
  studentRepository,
  classRepository,
  enrollmentRepository
);

const createStudentFactory = new CreateStudentController(useCase);

export { createStudentFactory };
