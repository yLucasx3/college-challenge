export interface IClassProps {
  id?: number;
  className: string;
  classCode: string;
  description: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}

export class Class implements IClassProps {
  id?: number;
  className: string;
  classCode: string;
  description: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;

  constructor(classProps?: IClassProps) {
    if (classProps) {
      Object.assign(this, classProps);
    }
  }

  show() {
    return `${this.className}-${this.classCode}`;
  }
}
