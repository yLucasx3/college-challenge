import { IHttpControllerContract } from "@/adpaters/contracts/http/controller.contract";
import { IHttpRequestContract } from "@/adpaters/contracts/http/request.contract";
import { IHttpResponseContract } from "@/adpaters/contracts/http/response.contract";
import {
  ShowStudentRequestDTO,
  ShowStudentResponseDTO,
} from "@/adpaters/dtos/student/show-student.dto";
import { handleError, ok } from "@/adpaters/helpers/http.helper";
import { ShowStudentUseCase } from "@/usecases/student/show-student.usecase";

export class ShowStudentController implements IHttpControllerContract {
  constructor(private showStudentUseCase: ShowStudentUseCase) {}
  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const { studentId } = new ShowStudentRequestDTO().map(request.params);

      const student = await this.showStudentUseCase.execute(studentId);

      const response = new ShowStudentResponseDTO().map(student);

      return ok(response);
    } catch (error) {
      return handleError(error);
    }
  }
}
