import { StudentInvalidFullNameError } from "../errors/student/student-invalid-full-name.error";
import { BaseValidation } from "./base.validation";

export class FullName extends BaseValidation {
  error() {
    return new StudentInvalidFullNameError();
  }

  isValid(): boolean {
    return (
      String(this.getValue()).length > 3 && typeof this.getValue() == "string"
    );
  }
}
