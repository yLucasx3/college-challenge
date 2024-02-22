import { BaseError } from "@/domain/errors/base.error";
import { IHttpResponseContract } from "../contracts/http/response.contract";

export const created = (data: unknown): IHttpResponseContract => ({
  statusCode: 201,
  data,
});

export const ok = (data: unknown): IHttpResponseContract => ({
  statusCode: 200,
  data,
});

export const badRequest = (error: Error): IHttpResponseContract => ({
  statusCode: 400,
  data: { error: error.message },
});

export const genericError = (baseError: BaseError): IHttpResponseContract => ({
  statusCode: baseError.httpCode,
  data: { error: baseError.message },
});

export const handleError = (error: unknown) => {
  if (error instanceof BaseError) {
    return genericError(error);
  }

  return internalError();
};

export const internalError = (): IHttpResponseContract => ({
  statusCode: 500,
  data: { error: "Unexpected Error" },
});
