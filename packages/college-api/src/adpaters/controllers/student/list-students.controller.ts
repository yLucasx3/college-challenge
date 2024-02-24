import { IHttpControllerContract } from "@/adpaters/contracts/http/controller.contract";
import { IHttpRequestContract } from "@/adpaters/contracts/http/request.contract";
import { IHttpResponseContract } from "@/adpaters/contracts/http/response.contract";
import { ListStudentResponseDTO } from "@/adpaters/dtos/student/list-student.dto";
import { handleError, ok } from "@/adpaters/helpers/http.helper";
import { ListStudentsUseCase } from "@/usecases/student/list-students.usecase";

export class ListStudentsController implements IHttpControllerContract {
  constructor(private listStudentsUseCase: ListStudentsUseCase) {}
  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const { limit, offset, filter, orderBy, orderDirection } = request.query;

      const students = await this.listStudentsUseCase.execute({
        limit: Number(limit),
        offset: Number(offset),
        filter,
        orderBy,
        orderDirection,
      });

      const response = new ListStudentResponseDTO().map(students);

      return ok(response);
    } catch (error) {
      return handleError(error);
    }
  }
}
