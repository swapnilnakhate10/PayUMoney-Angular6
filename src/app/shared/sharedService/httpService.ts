import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import {Observable} from 'rxjs';
const API_BASE_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  httpHeader = { headers: new HttpHeaders({
      'NoAuth': 'True',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Credentials': 'true'
    })};

  constructor(private http: HttpClient) { }

  get(url): Observable<any> {
    return this.http.get(API_BASE_URL + url);
  }

  post(url, body: any): Observable<any> {
    return this.http.post(API_BASE_URL + url, body, this.httpHeader);
  }

  put(url, body: any): Observable<any> {
    return this.http.put(API_BASE_URL + url, body, this.httpHeader);
  }

  delete(url): Observable<any> {
    return this.http.delete(API_BASE_URL + url, this.httpHeader);
  }
}
