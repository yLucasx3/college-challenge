import { IStudentProps, Student } from "../entities/student.entity";

export interface IStudentRepository {
  show(id: number): Promise<Student | null>;
  create(student: IStudentProps): Promise<Student>;
  update(id: number, student: Partial<IStudentProps>): Promise<Student>;
  delete(id: number): Promise<boolean>;
}
