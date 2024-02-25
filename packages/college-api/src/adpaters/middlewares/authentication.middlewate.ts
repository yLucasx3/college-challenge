import { UnauthorizedError } from "@/domain/errors/authentication/unauthorized.error";
import { IHttpMiddlewareContract } from "../contracts/http/middleware.contract";
import { IHttpRequestContract } from "../contracts/http/request.contract";
import { IHttpResponseContract } from "../contracts/http/response.contract";
import { JsonWebTokenProvider } from "@/infra/providers/jsonwebtoken.provider";

export class AuthenticationMiddleware implements IHttpMiddlewareContract {
    async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {

        const accessToken = request.headers.authorization;

        if (!accessToken) {
            return { statusCode: 401, error: new UnauthorizedError() }
        }

        try {
            await new JsonWebTokenProvider().decode(accessToken);

            return { statusCode: 200 };
        } catch (error) {
            return { statusCode: 401, error: new UnauthorizedError() }
        }
    }

}