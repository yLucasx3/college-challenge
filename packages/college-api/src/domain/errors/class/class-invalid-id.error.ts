import { BaseError } from "../base.error";

export class ClassInvalidIdError extends BaseError {
  constructor() {
    super("Invalid class id!");

    this.statusCode = 400;
    this.name = "ClassInvalidIdError";
  }
}
