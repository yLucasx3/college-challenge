import { SignupUseCase } from "@/usecases/signup.usecase";
import { BcryptProvider } from "../providers/bcrypt.provider";
import { SignupController } from "@/adpaters/controllers/signup.controller";
import { PostgreSQLUserRepository } from "../database/repositories/postgresql/postgresql-user.repository";

const userRepository = new PostgreSQLUserRepository();

const bycryptProvider = new BcryptProvider();

const usecase = new SignupUseCase(userRepository, bycryptProvider);

const signupFactory = new SignupController(usecase);

export { signupFactory };
