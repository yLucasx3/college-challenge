import { Router } from "express";
import { expressRouteAdapter } from "../express-route-adatper";
import { createStudentFactory } from "@/infra/factories/student/create-student.factory";
import { deleteStudentFactory } from "@/infra/factories/student/delete-student.factory";

export default (router: Router) => {
  router.post("/students", expressRouteAdapter(createStudentFactory));

  router.delete(
    "/students/:studentId",
    expressRouteAdapter(deleteStudentFactory)
  );
};
