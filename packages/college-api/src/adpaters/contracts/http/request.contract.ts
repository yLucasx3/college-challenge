export interface IHttpRequestContract<B = any, Q = any, P = any> {
  body?: B;
  query?: Q;
  params?: P;
}
