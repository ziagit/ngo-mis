import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from '../Organization';
import { HttpHeaderResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class OrganizationService {
  url:string='http://localhost:8000/api/';
   headers:HttpHeaders = new HttpHeaders();
  options:any; 
  
   

  constructor(private http:HttpClient) {
    // Fromte Date we can send // and how to sand
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('content-type','application/json');
    this.headers.append('x-Requested-with','XMLHttpRequest');

    let options = {
      headers: this.headers
    }

   }


  AddOrganization(data):Observable<Organization>
  {
       return this.http.post<Organization>(this.url+'resources',data);
  }
  getOrgTypes(){
    return this.http.get(this.url+'getOrgType');
  }

  getSectores(){
    return this.http.get(this.url+'OrgSectores');
  }
}
