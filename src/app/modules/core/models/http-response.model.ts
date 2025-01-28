export interface HttpResponse<T> {
  success: boolean;
  message: string;
  token?: string;
  data?: T;
}
