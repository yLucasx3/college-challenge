import { User } from "@/domain/entities/user.entity";

interface SignupRequestProps {
  name: string;
  password: string;
}

export class SignupRequestDTO {
  map(request: SignupRequestProps): User {
    const user = new User();

    user.name = request.name;
    user.password = request.password;

    return user;
  }
}

export class SignupResponseDTO {
  name: string;
  createdAt: Date;
  updatedAt: Date;

  map(user: User) {
    this.name = user.name;
    this.createdAt = user.createdAt!;
    this.updatedAt = user.updatedAt!;

    return this;
  }
}
