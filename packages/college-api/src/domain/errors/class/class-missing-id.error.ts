import { BaseError } from "../base.error";

export class ClassMissingIdError extends BaseError {
  constructor() {
    super("Mising class id!");

    this.statusCode = 400;
    this.name = "ClassMissingIdError";
  }
}
