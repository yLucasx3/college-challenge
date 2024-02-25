import { BaseError } from "@/domain/errors/base.error";

export interface IHttpResponseContract<D = any> {
  statusCode: number;
  data?: D;
  error?: BaseError
}
