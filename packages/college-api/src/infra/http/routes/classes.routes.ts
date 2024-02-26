import { Router } from "express";
import { expressRouteAdapter } from "../express-route-adatper";
import { isAuthenticateFactory } from "@/infra/factories/is-authenticated.factory";
import { expressMiddlewareAdapter } from "../express-middleware-adapter";
import { listClassesFactory } from "@/infra/factories/class/list-classes.factory";

export default (router: Router) => {
  router.get(
    "/classes",
    expressMiddlewareAdapter(isAuthenticateFactory),
    expressRouteAdapter(listClassesFactory)
  );
};
