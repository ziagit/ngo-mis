import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  server:string ='http://localhost:8000/api/';
  headers:HttpHeaders = new HttpHeaders();
  options:any;

  constructor(private http :HttpClient) { 
    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");
  }
  getProjectdata():Observable<Project[]>{
    return this.http.get<Project[]>(this.server+"projects");
  }

}
