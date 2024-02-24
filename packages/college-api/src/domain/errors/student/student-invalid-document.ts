import { BaseError } from "../base.error";

export class StudentInvalidDocumentError extends BaseError {
  constructor() {
    super("Invalid document!");

    this.statusCode = 400;
    this.name = "StudentInvalidDocumentError";
  }
}
