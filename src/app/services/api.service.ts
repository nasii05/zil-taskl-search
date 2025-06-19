import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint = 'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json';

  constructor(private http: HttpClient) { }


  getUserDetails(){
    return this.http.get(this.endpoint)
  }
}
