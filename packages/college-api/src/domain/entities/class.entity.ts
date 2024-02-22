import { BaseEntity, IBaseProps } from "./base.entity";

export type IClassProps = {
  id?: number;
  semester: string;
  schedule: string;
  courseId: number;
} & IBaseProps;

export class Class extends BaseEntity<IClassProps> implements IClassProps {
  id?: number;
  semester: string;
  schedule: string;
  courseId: number;

  show() {
    return `${this.id}-${this.schedule}`;
  }
}
