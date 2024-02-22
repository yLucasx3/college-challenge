import { BaseError } from "../base.error";

export class ClassNotFoundError extends BaseError {
  constructor() {
    super("Class not found!");

    this.httpCode = 404;
    this.name = "ClassNotFoundError";
  }
}
