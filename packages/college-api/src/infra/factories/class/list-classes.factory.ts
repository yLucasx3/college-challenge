import { ListClassesController } from "@/adpaters/controllers/class/list-class-controller";
import { PostgreSQLClassRepository } from "@/infra/database/repositories/postgresql/postgresql-class.repository";
import { ListClassesUseCase } from "@/usecases/class/list-classes.usecase";

const repository = new PostgreSQLClassRepository();

const usecase = new ListClassesUseCase(repository);

const listClassesFactory = new ListClassesController(usecase);

export { listClassesFactory };
