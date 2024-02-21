export interface ClassProps {
  id?: number;
  className: string;
  classCode: string;
  description: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}

export class Class implements ClassProps {
  id?: number;
  className: string;
  classCode: string;
  description: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;

  constructor(classProps?: ClassProps) {
    if (classProps) {
      Object.assign(this, classProps);
    }
  }

  show() {
    return `${this.className}-${this.classCode}`;
  }
}
