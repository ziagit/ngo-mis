import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrganization } from '../org-list/Organization';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  url:string='http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  // addOrganization(data):Observable<IOrganization>{
  //   return this.http.post<IOrganization>(this.url+'organizations', data);
  // }

  // getOrganizationList():Observable<IOrganization>{
  //   return this.http.get<IOrganization>(this.url+"getorganizationList");
  // }

}
