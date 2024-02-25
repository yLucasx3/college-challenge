import { BaseError } from "../base.error";

export class UnauthorizedError extends BaseError {
    constructor() {
        super("Unauthorized");

        this.statusCode = 401;
        this.name = "UnauthorizedError";
    }
}
