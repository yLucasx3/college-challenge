import { BaseEntity, IBaseProps } from "./base.entity";
import { ICourseProps } from "./course.entity";

export type IClassProps = {
  id?: number;
  name: string;
  courseId: number;
  course?: ICourseProps;
} & IBaseProps;

export class Class extends BaseEntity<IClassProps> implements IClassProps {
  readonly id?: number;
  name: string;
  courseId: number;
  course?: ICourseProps;

  constructor(props?: IClassProps) {
    super(props);

    Object.assign(this, props);
  }
}
