import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IOrganization} from './Organization';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrgListService {
    url: string='http://localhost:8000/api/';
    headers:HttpHeaders = new HttpHeaders();
  options:any;

  constructor(private http: HttpClient) { 
    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");
  }

  getOrg():Observable<IOrganization[]>{
    return this.http.get<IOrganization[]>(this.url+'organizations');
    
  }
  
}
