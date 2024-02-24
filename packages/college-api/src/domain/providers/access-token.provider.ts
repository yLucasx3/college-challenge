export interface AccessToken {
  encode(name: string, id: string): Promise<unknown>;
  decode(token: string): Promise<{ name: string; id: string }>;
}
