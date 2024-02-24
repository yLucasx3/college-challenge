import { StudentInvalidEmailError } from "../errors/student/student-invalid-email";
import { BaseValidation } from "./base.validation";

export class Email extends BaseValidation {
  error() {
    return new StudentInvalidEmailError();
  }

  isValid(): boolean {
    const expression: RegExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

    return RegExp(expression).test(this.getValue());
  }
}
