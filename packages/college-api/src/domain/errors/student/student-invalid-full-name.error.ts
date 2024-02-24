import { BaseError } from "../base.error";

export class StudentInvalidFullNameError extends BaseError {
  constructor() {
    super("Invalid full name!");

    this.statusCode = 400;
    this.name = "StudentInvalidFullNameError";
  }
}
