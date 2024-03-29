import { Router } from "express";
import { expressRouteAdapter } from "../express-route-adatper";
import { signupFactory } from "@/infra/factories/signup.factory";
import { signinFactory } from "@/infra/factories/signin.factory";

export default (router: Router) => {
  router.post("/signup", expressRouteAdapter(signupFactory));
  router.post("/signin", expressRouteAdapter(signinFactory));
};
