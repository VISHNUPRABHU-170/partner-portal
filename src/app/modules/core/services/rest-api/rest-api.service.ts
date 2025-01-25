import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  backendBaseURL!: string;

  constructor(private httpClient: HttpClient) {}

  get(endPoint: string, params?: any): Observable<any> {
    return this.httpClient.get(`${this.backendBaseURL}/${endPoint}`, {
      params,
    });
  }

  post(endPoint: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.backendBaseURL}/${endPoint}`, data);
  }
}
