import { SigninUseCase } from "@/usecases/signin.usecase";
import { PostgreSQLUserRepository } from "../database/repositories/postgresql/postgresql-user.repository";
import { BcryptProvider } from "../providers/bcrypt.provider";
import { JsonWebTokenProvider } from "../providers/jsonwebtoken.provider";
import { SigninController } from "@/adpaters/controllers/signin.controller";

const userRepository = new PostgreSQLUserRepository();
const bcryptProvider = new BcryptProvider();
const jsonwebtokenProbider = new JsonWebTokenProvider();

const usecase = new SigninUseCase(
  userRepository,
  bcryptProvider,
  jsonwebtokenProbider
);

const signinFactory = new SigninController(usecase);

export { signinFactory };
