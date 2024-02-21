export interface CourseProps {
  id?: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Course implements CourseProps {
  id?: number | undefined;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(courseProps?: CourseProps) {
    if (courseProps) {
      Object.assign(this, courseProps);
    }
  }

  show() {
    return `${this.id}-${this.name}`;
  }
}
