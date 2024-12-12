import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor (private httpClient: HttpClient) { }

  post(url: string, data: any) {
    this.httpClient.post(url, data);
  }
}
