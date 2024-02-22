import {
  IEnrollmentProps,
  Enrollment,
} from "@/domain/entities/enrollment.entity";
import { IEnrollmentRepository } from "@/domain/repositories";
import { prisma } from "../../configs/prisma";
import { EnrollmentMappper } from "../mappers/enrollment.mapper";

export class PostgreSQLEnrollmentRepository implements IEnrollmentRepository {
  async create(enrollment: IEnrollmentProps): Promise<Enrollment> {
    const newEnrollment = await prisma.enrollment.create({
      data: EnrollmentMappper.toDatabase(enrollment),
    });

    return EnrollmentMappper.fromDatabase(newEnrollment);
  }
}
