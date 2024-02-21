export interface ICourseProps {
  id?: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Course implements ICourseProps {
  id?: number | undefined;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(courseProps?: ICourseProps) {
    if (courseProps) {
      Object.assign(this, courseProps);
    }
  }

  show() {
    return `${this.id}-${this.name}`;
  }
}
