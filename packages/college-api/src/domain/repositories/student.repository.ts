import { IStudentProps, Student } from "../entities/student.entity";

export interface IStudentRepository {
  list(): Promise<Student[] | null>;
  show(id: number): Promise<Student | null>;
  showByDocument(document: string): Promise<Student | null>;
  create(student: IStudentProps): Promise<Student>;
  update(id: number, student: IStudentProps): Promise<Student>;
  delete(id: number): Promise<void>;
}
