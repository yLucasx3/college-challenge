import { IAccessTokenProvider } from "@/domain/providers/access-token.provider";
import jwt, { verify } from "jsonwebtoken";

export class JsonWebTokenProvider implements IAccessTokenProvider {
  encode(name: string, id: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { name, id },
        process.env.SECRET!,
        { expiresIn: "1d" },
        (error, token) => {
          if (error) return reject(error);

          return resolve(token);
        }
      );
    });
  }
  decode(token: string): Promise<{ name: string; id: string }> {
    return new Promise((resolve, reject) => {
      verify(token, process.env.SECRET!, (err, decoded) => {
        if (err) return reject(err);

        return resolve(decoded as { name: string; id: string });
      });
    });
  }
}
