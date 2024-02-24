import { IHttpControllerContract } from "@/adpaters/contracts/http/controller.contract";
import { IHttpRequestContract } from "@/adpaters/contracts/http/request.contract";
import { IHttpResponseContract } from "@/adpaters/contracts/http/response.contract";
import { DeleteStudentUseCase } from "@/usecases/student/delete-student.usecase";
import { handleError, ok } from "@/adpaters/helpers/http.helper";

export class DeleteStudentController implements IHttpControllerContract {
  constructor(private deleteStudentUseCase: DeleteStudentUseCase) {}

  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const { studentId } = request.params;

      await this.deleteStudentUseCase.execute(Number(studentId));

      return ok({ message: "deleted" });
    } catch (error) {
      return handleError(error);
    }
  }
}
