import { BaseValidation } from "../validation/base.validation";

export type IBaseProps = {
  createdAt?: Date;
  updatedAt?: Date;
};

export class BaseEntity<T> implements IBaseProps {
  createdAt?: Date;
  updatedAt?: Date;

  constructor(props?: T) {
    if (props) {
      for (const key of Object.keys(props)) {
        const value = props[key as keyof T];

        if (value instanceof BaseValidation && !value.isValid()) {
          throw value.error();
        }
      }
      Object.assign(this, props);
    }

    if (!this.createdAt) {
      this.createdAt = new Date();
    }

    if (!this.updatedAt) {
      this.updatedAt = new Date();
    }
  }
}
