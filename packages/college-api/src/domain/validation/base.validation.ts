import { BaseError } from "../errors/base.error";

export abstract class BaseValidation {
  constructor(private value: any) {}

  getValue(): any {
    return this.value;
  }

  abstract isValid(): boolean;
  abstract error(): BaseError;
}
