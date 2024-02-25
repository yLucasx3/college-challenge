import { AuthenticationMiddleware } from "@/adpaters/middlewares/authentication.middlewate";

const isAuthenticateFactory = new AuthenticationMiddleware();

export { isAuthenticateFactory }