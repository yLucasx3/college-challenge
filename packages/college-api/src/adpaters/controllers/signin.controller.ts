import { IHttpControllerContract } from "../contracts/http/controller.contract";
import { IHttpRequestContract } from "../contracts/http/request.contract";
import { IHttpResponseContract } from "../contracts/http/response.contract";
import { SigninUseCase } from "@/usecases/signin.usecase";
import { SigninRequestDTO, SigninResponseDTO } from "../dtos/signin.dto";
import { created, handleError } from "../helpers/http.helper";

export class SigninController implements IHttpControllerContract {
  constructor(private signinUseCase: SigninUseCase) {}

  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const { name, password } = new SigninRequestDTO().map(request.body);

      const { user, access_token } = await this.signinUseCase.execute(
        name,
        password
      );

      const response = new SigninResponseDTO(access_token).map(user);
      return created(response);
    } catch (error) {
      return handleError(error);
    }
  }
}
