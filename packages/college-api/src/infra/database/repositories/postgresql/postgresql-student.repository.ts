import { Student, IStudentProps } from "@/domain/entities/student.entity";
import { IStudentRepository } from "@/domain/repositories/student.repository";
import { prisma } from "../../configs/prisma";
import { StudentMappper } from "../mappers/student.mapper";

export class PostgreSQLStudentRepository implements IStudentRepository {
  async list(): Promise<Student[] | null> {
    const students = await prisma.student.findMany();

    if (!students.length) return null;

    return students.map(StudentMappper.fromDatabase);
  }

  async show(id: number): Promise<Student | null> {
    const findedStudent = await prisma.student.findUnique({ where: { id } });

    if (!findedStudent) return null;

    return StudentMappper.fromDatabase(findedStudent);
  }

  async create(student: IStudentProps): Promise<Student> {
    const newStudent = await prisma.student.create({
      data: StudentMappper.toDatabase(student),
    });

    return StudentMappper.fromDatabase(newStudent);
  }

  async update(id: number, student: Partial<IStudentProps>): Promise<Student> {
    const updatedStudent = await prisma.student.update({
      where: { id },
      data: student,
    });

    return StudentMappper.fromDatabase(updatedStudent);
  }

  async delete(id: number): Promise<void> {
    const deletedStudent = await prisma.student.delete({ where: { id } });
    deletedStudent;
  }
}
