import { CreateStudentUseCase } from "../../../usecases/student/create-student.usecase";
import { IHttpRequestContract } from "../../contracts/http/request.contract";
import { IHttpResponseContract } from "../../contracts/http/response.contract";
import {
  CreateStudentRequestDTO,
  CreateStudentResponseDTO,
} from "../../dtos/student/create-student.dto";
import { created, internalError } from "../../helpers/http.helper";
import { IHttpControllerContract } from "./../../contracts/http/controller.contract";
export class CreateStudentController implements IHttpControllerContract {
  constructor(private createStudentUseCase: CreateStudentUseCase) {}

  async execute(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const bodtDto = new CreateStudentRequestDTO().map(request.body);

      const newStudent = await this.createStudentUseCase.execute(bodtDto);

      const response = new CreateStudentResponseDTO().map(newStudent);

      return created(response);
    } catch (error) {
      return internalError();
    }
  }
}
