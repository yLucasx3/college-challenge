import { Router } from "express";
import { expressRouteAdapter } from "../express-route-adatper";
import { createStudentFactory } from "@/infra/factories/student/create-student.factory";
import { deleteStudentFactory } from "@/infra/factories/student/delete-student.factory";
import { updateStudentFactory } from "@/infra/factories/student/update-student.factory";
import { listStudentsFactory } from "@/infra/factories/student/list-students.factory";

export default (router: Router) => {
  router.get("/students", expressRouteAdapter(listStudentsFactory));

  router.post("/students", expressRouteAdapter(createStudentFactory));

  router.put("/students/:studentId", expressRouteAdapter(updateStudentFactory));

  router.delete(
    "/students/:studentId",
    expressRouteAdapter(deleteStudentFactory)
  );
};
