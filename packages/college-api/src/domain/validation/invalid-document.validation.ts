import { StudentInvalidDocumentError } from "../errors/student/student-invalid-document";
import { BaseValidation } from "./base.validation";

export class Document extends BaseValidation {
  error() {
    return new StudentInvalidDocumentError();
  }

  isValid(): boolean {
    const expression: RegExp =
      /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;

    return RegExp(expression).test(this.getValue());
  }
}
