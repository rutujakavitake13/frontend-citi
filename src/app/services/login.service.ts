import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  serviceUrl = "http://localhost:8080";
  
  constructor(private http:HttpClient) { }
  checkLoginCustomer(obj){
    return this.http.post(this.serviceUrl+ "/login",obj)
  }
}
