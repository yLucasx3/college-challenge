export class StudentEmptyError extends Error {
  constructor() {
    super("Student is empty!");

    this.name = "StudentEmptyError";
  }
}
