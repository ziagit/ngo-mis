import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { organization } from '../organization';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor( private http: HttpClient) { }
  

  getOrganization():Observable<organization[]>{
    return this.http.get<organization[]>('http://127.0.0.1:8000/api/organizations');
    
  }
}


