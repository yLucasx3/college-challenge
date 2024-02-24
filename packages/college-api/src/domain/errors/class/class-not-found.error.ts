import { BaseError } from "../base.error";

export class ClassNotFoundError extends BaseError {
  constructor() {
    super("Class not found!");

    this.statusCode = 404;
    this.name = "ClassNotFoundError";
  }
}
