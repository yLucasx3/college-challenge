import { IBaseProps } from "@/domain/entities/base.entity";

export const withTimestamps = <T extends IBaseProps>(genericProps: T) => {
  return {
    ...genericProps,
    createdAt: genericProps.createdAt!,
    updatedAt: genericProps.updatedAt!,
  };
};
