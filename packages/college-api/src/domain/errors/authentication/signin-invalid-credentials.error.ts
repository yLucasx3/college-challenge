import { BaseError } from "../base.error";

export class SigninInvalidCredentials extends BaseError {
  constructor() {
    super("Invalid credentials!");

    this.statusCode = 401;
    this.name = "SigninInvalidCredentials";
  }
}
