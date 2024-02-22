import { IHttpControllerContract } from "@/adpaters/contracts/http/controller.contract";
import { Request, Response } from "express";

export const expressRouteAdapter = (controller: IHttpControllerContract) => {
  return async (request: Request, response: Response) => {
    const httpResponse = await controller.handle({
      body: request?.body,
      params: request?.params,
      query: request?.query,
    });

    return response.status(httpResponse.statusCode).send(httpResponse.data);
  };
};
