import { CreateStudentController } from "@/adpaters/controllers/student/create-student.controller";
import { PostgreSQLStudentRepository } from "@/infra/database/repositories/postgresql/postgresql-student.repository";
import { CreateStudentUseCase } from "@/usecases/student/create-student.usecase";

const repository = new PostgreSQLStudentRepository();
const useCase = new CreateStudentUseCase(repository);
const createStudentUseCase = new CreateStudentController(useCase);
