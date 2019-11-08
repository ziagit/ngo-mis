import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Keyspersonnel } from '../Keyspersonnel';


@Injectable({
  providedIn: 'root'
})
export class KeypersonsServiceService {
  url: string='http://localhost:8000/api/';
  headers:HttpHeaders = new HttpHeaders();
  options:any; 

  constructor( private http: HttpClient) { 
    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");
  }

  getKeyPersonalAsDb():Observable<Keyspersonnel[]>{
    
    return this.http.get<Keyspersonnel[]>(this.url+"keyspersonnels");

  }

 addKeysPersonal(data):Observable<Keyspersonnel> 
 {
  return this.http.post<Keyspersonnel>(this.url+"keyspersonnels",data); 
 }

 selectOrganizations():Observable<Keyspersonnel>
 {
   return this.http.get<Keyspersonnel>(this.url+"getOrganization");
 }

 deletekeyspersonal(id):Observable<Keyspersonnel>
  {
   return this.http.delete<Keyspersonnel>(this.url+"keyspersonnels/"+id);
    
 }

 updateKeysPersonalOrgs(data,id):Observable<Keyspersonnel>{
  return this.http.patch<Keyspersonnel>(this.url+"keyspersonnels/"+id,data);
}

}
