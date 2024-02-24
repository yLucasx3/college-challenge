import { BaseError } from "../base.error";

export class UserNameAlreadyInUseError extends BaseError {
  constructor() {
    super("Name already been used.");

    this.statusCode = 400;
    this.name = "UserNameAlreadyInUseError";
  }
}
