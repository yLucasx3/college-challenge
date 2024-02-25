import { Router } from "express";
import { expressRouteAdapter } from "../express-route-adatper";
import { createStudentFactory } from "@/infra/factories/student/create-student.factory";
import { deleteStudentFactory } from "@/infra/factories/student/delete-student.factory";
import { updateStudentFactory } from "@/infra/factories/student/update-student.factory";
import { listStudentsFactory } from "@/infra/factories/student/list-students.factory";
import { isAuthenticateFactory } from "@/infra/factories/is-authenticated.factory";
import { expressMiddlewareAdapter } from "../express-middleware-adapter";

export default (router: Router) => {
  router.get("/students", expressMiddlewareAdapter(isAuthenticateFactory), expressRouteAdapter(listStudentsFactory));

  router.post("/students", expressMiddlewareAdapter(isAuthenticateFactory), expressRouteAdapter(createStudentFactory));

  router.put("/students/:studentId", expressMiddlewareAdapter(isAuthenticateFactory), expressRouteAdapter(updateStudentFactory));

  router.delete(
    "/students/:studentId",
    expressMiddlewareAdapter(isAuthenticateFactory),
    expressRouteAdapter(deleteStudentFactory)
  );
};
