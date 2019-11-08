import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrgLawService {
orgLawUrl: string = 'http://localhost:8000/api/';
  constructor(private http:HttpClient) { }

  addOrgLaw(data){
    return this.http.post(this.orgLawUrl+'orglaws', data);
  }
  
}
