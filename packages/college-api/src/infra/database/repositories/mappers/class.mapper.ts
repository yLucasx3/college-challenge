import { Optional } from "@/domain/shared/make-optional";
import { PrismaClass } from "../../configs/prisma/database-types";
import { withTimestamps } from "@/infra/utils/with-timestamps.mapper";
import { Class, IClassProps } from "@/domain/entities/class.entity";

export namespace ClassMappper {
  export const toDatabase = (
    clazz: IClassProps
  ): Optional<PrismaClass, "id"> => {
    return withTimestamps(clazz);
  };

  export const fromDatabase = (clazz: PrismaClass): Class => {
    return new Class(withTimestamps(clazz));
  };
}
