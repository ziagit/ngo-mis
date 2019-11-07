import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sector } from '../sector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectoreService {
  headers:HttpHeaders = new HttpHeaders();

  constructor(private httpClient:HttpClient ) 
  { 
    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");

  }

  getSectore():Observable<sector[]>{
    return this.httpClient.get<sector[]>('http://127.0.0.1:8000/api/sectors');
  }


  deleteSectore(id){
    return this.httpClient.delete<sector[]>('http://127.0.0.1:8000/api/sectors/'+id);
  }
  
  insertSector(data):Observable<sector>
  {
    return this.httpClient.post<sector>('http://127.0.0.1:8000/api/sectors',data);
  }


  editSectore(data,id){
    return this.httpClient.put('http://127.0.0.1:8000/api/sectors/'+id,data);
  }

}
