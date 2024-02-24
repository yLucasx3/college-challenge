import { User } from "@/domain/entities/user.entity";

interface SigninRequestProps {
  name: string;
  password: string;
}

export class SigninRequestDTO {
  map(request: SigninRequestProps): User {
    const user = new User();

    user.name = request.name;
    user.password = request.password;

    return user;
  }
}

export class SigninResponseDTO {
  name: string;
  accessToken: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  map(user: User) {
    this.name = user.name;
    this.createdAt = user.createdAt!;
    this.updatedAt = user.updatedAt!;

    return this;
  }
}
