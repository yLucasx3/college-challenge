import { IHttpRequestContract } from "./request.contract";
import { IHttpResponseContract } from "./response.contract";

export interface IHttpMiddlewareContract {
    handle(request: IHttpRequestContract): Promise<IHttpResponseContract>;
}
