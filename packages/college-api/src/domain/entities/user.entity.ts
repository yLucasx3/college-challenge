import { BaseEntity, IBaseProps } from "./base.entity";

export type IUserProps = {
  id?: number;
  name: string;
  password: string;
} & IBaseProps;

export class User extends BaseEntity<IUserProps> implements IUserProps {
  id?: number;
  name: string;
  password: string;

  constructor(props?: IUserProps) {
    super();

    Object.assign(this, props);
  }
}
