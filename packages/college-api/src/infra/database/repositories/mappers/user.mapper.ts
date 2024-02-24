import { Optional } from "@/domain/shared/make-optional";
import { PrismaUser } from "../../configs/prisma/database-types";
import { withTimestamps } from "@/infra/utils/with-timestamps.mapper";
import { IUserProps, User } from "@/domain/entities/user.entity";

export namespace UserMapper {
  export const toDatabase = (user: IUserProps): Optional<PrismaUser, "id"> => {
    return withTimestamps(user);
  };

  export const fromDatabase = (user: PrismaUser): User => {
    return new User(withTimestamps(user));
  };
}
