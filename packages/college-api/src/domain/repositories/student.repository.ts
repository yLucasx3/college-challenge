import { IStudentProps, Student } from "../entities/student.entity";

export interface IStudentRepository {
  list(): Promise<Student[] | null>;
  show(id: number): Promise<Student | null>;
  create(student: IStudentProps): Promise<Student>;
  update(id: number, student: Partial<IStudentProps>): Promise<Student>;
  delete(id: number): Promise<void>;
}
