import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { organizationType} from '../organizationType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor( private http: HttpClient) { }
  

  getOrganization():Observable<organizationType[]>{
    return this.http.get<organizationType[]>('http://127.0.0.1:8000/api/orgtypes');
    
  }

  deleteOrgType(id)
  {
    return this.http.delete<organizationType[]>('http://127.0.0.1:8000/api/orgtypes/'+id);
  }

  addOrgtype(data){
    return this.http.post<organizationType[]>('http://127.0.0.1:8000/api/orgtypes',data);
  }
 
}


