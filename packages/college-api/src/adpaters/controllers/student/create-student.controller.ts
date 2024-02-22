import { IHttpControllerContract } from "@/adpaters/contracts/http/controller.contract";
import { IHttpRequestContract } from "@/adpaters/contracts/http/request.contract";
import { IHttpResponseContract } from "@/adpaters/contracts/http/response.contract";
import {
  CreateStudentRequestDTO,
  CreateStudentResponseDTO,
} from "@/adpaters/dtos/student/create-student.dto";
import { created, handleError } from "@/adpaters/helpers/http.helper";
import { CreateStudentUseCase } from "@/usecases/student/create-student.usecase";

export class CreateStudentController implements IHttpControllerContract {
  constructor(private createStudentUseCase: CreateStudentUseCase) {}

  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const { classId } = request.params;

      const bodtDto = new CreateStudentRequestDTO().map(request.body);

      const newStudent = await this.createStudentUseCase.execute(
        bodtDto,
        classId
      );

      const response = new CreateStudentResponseDTO().map(newStudent);

      return created(response);
    } catch (error) {
      return handleError(error);
    }
  }
}
