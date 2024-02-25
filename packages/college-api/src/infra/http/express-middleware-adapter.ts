import { IHttpMiddlewareContract } from "@/adpaters/contracts/http/middleware.contract";
import { NextFunction, Request, Response } from "express";

export const expressMiddlewareAdapter = (middleware: IHttpMiddlewareContract) => {
  return async (request: Request, response: Response, nextFunction: NextFunction) => {
    const middlewareResponse = await middleware.handle(request);

    if (middlewareResponse.error) {
      return response.status(middlewareResponse.statusCode).send(middlewareResponse.data)
    }

    return nextFunction();
  };
};
