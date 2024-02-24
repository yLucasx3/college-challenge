import { ListStudentsController } from "@/adpaters/controllers/student/list-students.controller";
import { PostgreSQLStudentRepository } from "@/infra/database/repositories/postgresql/postgresql-student.repository";
import { ListStudentsUseCase } from "@/usecases/student/list-students.usecase";

const repository = new PostgreSQLStudentRepository();

const usecase = new ListStudentsUseCase(repository);

const listStudentsFactory = new ListStudentsController(usecase);

export { listStudentsFactory };
