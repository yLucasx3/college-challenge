import { SignupUseCase } from "@/usecases/signup.usecase";
import { IHttpControllerContract } from "../contracts/http/controller.contract";
import { IHttpRequestContract } from "../contracts/http/request.contract";
import { IHttpResponseContract } from "../contracts/http/response.contract";
import { created, handleError } from "../helpers/http.helper";
import { SignupRequestDTO, SignupResponseDTO } from "../dtos/signup.dto";

export class SignupController implements IHttpControllerContract {
  constructor(private signupUseCase: SignupUseCase) {}

  async handle(request: IHttpRequestContract): Promise<IHttpResponseContract> {
    try {
      const bodyDto = new SignupRequestDTO().map(request.body);

      const newUser = await this.signupUseCase.execute(bodyDto);

      const response = new SignupResponseDTO().map(newUser);
      return created(response);
    } catch (error) {
      return handleError(error);
    }
  }
}
