import { BaseEntity, IBaseProps } from "./base.entity";

export type IClassProps = {
  id?: number;
  name: string;
  courseId: number;
} & IBaseProps;

export class Class extends BaseEntity<IClassProps> implements IClassProps {
  readonly id?: number;
  name: string;
  courseId: number;

  constructor(props?: IClassProps) {
    super(props);

    Object.assign(this, props);
  }
}
