export interface Course {
  id: number;
  name: string;
}

export interface Class {
  id: number;
  name: string;
  course: Course;
}

export interface Enrollment {
  id: number;
  class: Class;
}

export interface Student {
  id: number;
  fullName: string;
  email: string;
  cpf: string;
  ra: string;
  enrollment: Enrollment;
}
