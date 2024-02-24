import { User } from "@/domain/entities/user.entity";
import { UserNameAlreadyInUseError } from "@/domain/errors/user/user-name-already-in-use.error";
import { IPasswordProvider } from "@/domain/providers/password.provider";
import { IUserRepository } from "@/domain/repositories/user.repository";

export class SignupUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordProvider: IPasswordProvider
  ) {}

  async execute(user: User): Promise<User> {
    const { name, password } = user;

    const isUserNameAlreadyInUse = await this.userRepository.showByName(name);

    if (isUserNameAlreadyInUse?.name) {
      throw new UserNameAlreadyInUseError();
    }

    const hashedPassword = await this.passwordProvider.hash(password, 5);

    const newUser = await this.userRepository.create({
      name,
      password: hashedPassword,
    });

    return newUser;
  }
}
