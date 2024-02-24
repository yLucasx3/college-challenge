import { createStudentFactory } from "@/infra/factories/student/create-student.factory";
import { Router } from "express";
import { expressRouteAdapter } from "../express-route-adatper";

export default (router: Router) => {
  router.post("/student", expressRouteAdapter(createStudentFactory));
};
