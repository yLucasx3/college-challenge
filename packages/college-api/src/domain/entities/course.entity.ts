import { BaseEntity, IBaseProps } from "./base.entity";

export type ICourseProps = {
  id?: number;
  name: string;
  description: string;
} & IBaseProps;

export class Course extends BaseEntity<ICourseProps> implements ICourseProps {
  id?: number;
  name: string;
  description: string;

  constructor(props?: ICourseProps) {
    super();

    Object.assign(this, props);
  }
}
