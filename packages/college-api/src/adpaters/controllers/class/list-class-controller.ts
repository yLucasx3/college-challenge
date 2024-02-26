import { IHttpControllerContract } from "@/adpaters/contracts/http/controller.contract";
import { IHttpRequestContract } from "@/adpaters/contracts/http/request.contract";
import { IHttpResponseContract } from "@/adpaters/contracts/http/response.contract";
import { ListClassResponseDTO } from "@/adpaters/dtos/class/list-classes.dto";
import { handleError, ok } from "@/adpaters/helpers/http.helper";
import { ListClassesUseCase } from "@/usecases/class/list-classes.usecase";

export class ListClassesController implements IHttpControllerContract {
  constructor(private listClassUseCase: ListClassesUseCase) {}
  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const { limit, offset, filter, orderBy, orderDirection } = request.query;

      const classes = await this.listClassUseCase.execute({
        limit: limit ? Number(limit) : 50,
        offset: offset ? Number(offset) : 0,
        filter,
        orderBy,
        orderDirection,
      });

      const response = new ListClassResponseDTO().map(classes);

      return ok(response);
    } catch (error) {
      return handleError(error);
    }
  }
}
