import { ShowStudentController } from "@/adpaters/controllers/student/show-student.controller";
import { PostgreSQLStudentRepository } from "@/infra/database/repositories/postgresql/postgresql-student.repository";
import { ShowStudentUseCase } from "@/usecases/student/show-student.usecase";

const repository = new PostgreSQLStudentRepository();

const usecase = new ShowStudentUseCase(repository);

const showStudentFactory = new ShowStudentController(usecase);

export { showStudentFactory };
