import { BaseError } from "../base.error";

export class StudentMissingPropertiesError extends BaseError {
  constructor() {
    super("Student properties are missing!");

    this.statusCode = 400;
    this.name = "StudentMissingPropertiesError";
  }
}
