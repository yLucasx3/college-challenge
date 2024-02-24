import { DeleteStudentController } from "@/adpaters/controllers/student/delete-student.controller";
import { PostgreSQLStudentRepository } from "@/infra/database/repositories/postgresql/postgresql-student.repository";
import { DeleteStudentUseCase } from "@/usecases/student/delete-student.usecase";

const repository = new PostgreSQLStudentRepository();

const usecase = new DeleteStudentUseCase(repository);

const deleteStudentFactory = new DeleteStudentController(usecase);

export { deleteStudentFactory };
