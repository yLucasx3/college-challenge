import { BaseError } from "../base.error";

export class StudentEmptyError extends BaseError {
  constructor() {
    super("Student is empty!");

    this.httpCode = 400;
    this.name = "StudentEmptyError";
  }
}
