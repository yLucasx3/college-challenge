import { BaseEntity, IBaseProps } from "./base.entity";

export type IEnrollmentProps = {
  id?: number;
  classId: number;
} & IBaseProps;

export class Enrollment
  extends BaseEntity<IEnrollmentProps>
  implements IEnrollmentProps
{
  id?: number;
  classId: number;

  constructor(props?: IEnrollmentProps) {
    super(props);

    Object.assign(this, props);
  }
}
