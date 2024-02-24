import { User } from "@/domain/entities/user.entity";
import { SigninInvalidCredentials } from "@/domain/errors/authentication/signin-invalid-credentials.error";
import { IAccessTokenProvider } from "@/domain/providers/access-token.provider";
import { IPasswordProvider } from "@/domain/providers/password.provider";
import { IUserRepository } from "@/domain/repositories/user.repository";

export class SigninUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordProvider: IPasswordProvider,
    private accessTokenProvider: IAccessTokenProvider
  ) {}

  async execute(
    name: string,
    password: string
  ): Promise<{ user: User; access_token: string }> {
    const findedUser = await this.userRepository.showByName(name);

    if (!findedUser?.id) {
      throw new SigninInvalidCredentials();
    }

    const isPasswordCorrect = await this.passwordProvider.compare(
      password,
      findedUser?.password!
    );

    if (!isPasswordCorrect) {
      throw new SigninInvalidCredentials();
    }

    const accessToken = await this.accessTokenProvider.encode(
      findedUser.name,
      findedUser.id.toString()
    );

    return { user: findedUser, access_token: accessToken as string };
  }
}
