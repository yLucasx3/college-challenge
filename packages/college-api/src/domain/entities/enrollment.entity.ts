import { BaseEntity, IBaseProps } from "./base.entity";
import { IClassProps } from "./class.entity";

export type IEnrollmentProps = {
  id?: number;
  classId: number;
  class?: IClassProps;
} & IBaseProps;

export class Enrollment
  extends BaseEntity<IEnrollmentProps>
  implements IEnrollmentProps
{
  id?: number;
  classId: number;
  class?: IClassProps;

  constructor(props?: IEnrollmentProps) {
    super(props);

    Object.assign(this, props);
  }
}
