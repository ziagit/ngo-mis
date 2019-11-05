import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  server:string ='http://localhost:8000/api/';
  headers:HttpHeaders = new HttpHeaders();
  options:any;

  constructor(private http :HttpClient) { 
    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");
  }
  getrealationtable(){
    return this.http.get(this.server+"employeerelation");
  }
  getEmployeedata(){
    return this.http.get(this.server+"employees");
  }
  addEmployeedata(data){
    return this.http.post(this.server+"employees",data);
  }
}
