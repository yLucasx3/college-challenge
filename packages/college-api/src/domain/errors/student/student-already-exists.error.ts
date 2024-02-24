import { BaseError } from "../base.error";

export class StudentAlreadyExistsError extends BaseError {
  constructor() {
    super("Student already exists!");

    this.statusCode = 400;
    this.name = "StudentAlreadyExistsError";
  }
}
