export type IBaseProps = {
  createdAt?: Date;
  updatedAt?: Date;
};

export class BaseEntity<T> implements IBaseProps {
  createdAt?: Date;
  updatedAt?: Date;

  constructor(props?: T) {
    if (props) {
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
