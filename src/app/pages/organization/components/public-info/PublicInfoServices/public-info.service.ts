import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publicInfo } from '../publicInfo';



@Injectable({
  providedIn: 'root'
})
export class PublicInfoService {

  url: string='http://localhost:8000/api/';
  headers:HttpHeaders = new HttpHeaders();
  options:any;

  constructor(private http:HttpClient) {

    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");

   }

   getPublicInfoAsDB():Observable<publicInfo[]> {
     return this.http.get<publicInfo[]>(this.url+"organizations");
   }

   // for select relation tables
 selectOrgs():Observable<publicInfo>{
  return this.http.get<publicInfo>(this.url+"organizationList");
}

deleteOrgs(id):Observable<publicInfo> {
  return this.http.delete<publicInfo>(this.url+"organizations/"+id);
}

createOrganization(data):Observable<publicInfo> {
  return this.http.post<publicInfo>(this.url+"organizations",data);
}
update(data, id):Observable<publicInfo>
{
  return this.http.patch<publicInfo>(this.url+"organizations/"+id,data);
}
}
