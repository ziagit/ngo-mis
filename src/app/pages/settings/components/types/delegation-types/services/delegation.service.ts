import { Injectable } from '@angular/core';
import { delegation } from '../delegation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DelegationService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  getDelegation():Observable<delegation[]>{
    return this.http.get<delegation[]>('http://localhost:8000/api/delegationTypes');
  }


  deleteDlgType(id)
  {
    return this.http.delete('http://127.0.0.1:8000/api/delegationTypes/'+id);
  }

  addDelegationType(data):Observable<delegation>{
    return this.http.post<delegation>('http://127.0.0.1:8000/api/delegationTypes/',data);
  }

  updateDeleationType(data,id){
    console.log('from server',data,id);
    return this.http.put('http://127.0.0.1:8000/api/delegationTypes/'+id,data);
  }

}
