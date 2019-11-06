import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IOrganization} from './Organization';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrgListService {

  	url: string='http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  getOrg():Observable<IOrganization[]>{
    return this.http.get<IOrganization[]>(this.url+'organizations');
  }

 
  
}
