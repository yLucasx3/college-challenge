import { IAccessTokenProvider } from "@/domain/providers/access-token.provider";
import jwt, { verify } from "jsonwebtoken";

const { JWT_SECRET } = process.env;

export class JsonWebTokenProvider implements IAccessTokenProvider {
  encode(name: string, id: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { name, id },
        JWT_SECRET!,
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
      verify(token, JWT_SECRET!, (err, decoded) => {
        if (err) return reject(err);

        return resolve(decoded as { name: string; id: string });
      });
    });
  }
}
