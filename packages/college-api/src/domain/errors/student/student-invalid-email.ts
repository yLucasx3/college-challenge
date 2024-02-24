import { BaseError } from "../base.error";

export class StudentInvalidEmailError extends BaseError {
  constructor() {
    super("Invalid email!");

    this.statusCode = 400;
    this.name = "StudentInvalidEmailError";
  }
}
