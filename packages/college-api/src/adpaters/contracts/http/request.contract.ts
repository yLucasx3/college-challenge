export interface IHttpRequestContract<B = any, Q = any, P = any, H = any> {
  body?: B;
  query?: Q;
  params?: P;
  headers?: H;
}
