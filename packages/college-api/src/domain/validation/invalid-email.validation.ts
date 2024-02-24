import { StudentInvalidEmailError } from "../errors/student/student-invalid-email";
import { BaseValidation } from "./base.validation";

export class Email extends BaseValidation {
  error() {
    return new StudentInvalidEmailError();
  }

  isValid(): boolean {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return (
      RegExp(expression).test(this.getValue()) &&
      String(this.getValue()).length > 1 &&
      typeof this.getValue() == "string"
    );
  }
}
