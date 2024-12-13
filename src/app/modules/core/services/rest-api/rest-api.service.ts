import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  backendBaseURL!: string;

  constructor (private httpClient: HttpClient) { }

  post(endPoint: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.backendBaseURL}/${endPoint}`, data);
  }
}
