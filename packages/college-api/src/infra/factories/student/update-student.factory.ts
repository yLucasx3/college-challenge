import { UpdateStudentController } from "@/adpaters/controllers/student/update-student.controller";
import { PostgreSQLStudentRepository } from "@/infra/database/repositories/postgresql/postgresql-student.repository";
import { UpdateStudentUseCase } from "@/usecases/student/update-student.usecase";

const repository = new PostgreSQLStudentRepository();
const usecase = new UpdateStudentUseCase(repository);

const updateStudentFactory = new UpdateStudentController(usecase);

export { updateStudentFactory };
