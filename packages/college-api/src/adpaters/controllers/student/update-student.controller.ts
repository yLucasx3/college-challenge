import { IHttpControllerContract } from "@/adpaters/contracts/http/controller.contract";
import { IHttpRequestContract } from "@/adpaters/contracts/http/request.contract";
import { IHttpResponseContract } from "@/adpaters/contracts/http/response.contract";
import {
  UpdateStudentRequestDTO,
  UpdateStudentResponseDTO,
} from "@/adpaters/dtos/student/update-student.dto";
import { handleError, ok } from "@/adpaters/helpers/http.helper";
import { UpdateStudentUseCase } from "@/usecases/student/update-student.usecase";

export class UpdateStudentController implements IHttpControllerContract {
  constructor(private updateStudentUseCase: UpdateStudentUseCase) {}

  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const { studentId } = request.params;

      const bodyDTO = new UpdateStudentRequestDTO().map(request.body);

      const updatedStudent = await this.updateStudentUseCase.execute(
        Number(studentId),
        bodyDTO
      );

      const response = new UpdateStudentResponseDTO().map(updatedStudent);

      return ok(response);
    } catch (error) {
      return handleError(error);
    }
  }
}
