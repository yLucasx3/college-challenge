import { BaseError } from "../base.error";

export class StudentNotFoundError extends BaseError {
  constructor() {
    super("Student not found!");

    this.statusCode = 404;
    this.name = "StudentNotFoundError";
  }
}
