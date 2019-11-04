import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { District } from '../districts/District';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  headers:HttpHeaders = new HttpHeaders();

  constructor(private httpClient:HttpClient ) 
  { 
    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");
  }


  getDistrict():Observable<District[]>{
    return this.httpClient.get<District[]>('http://127.0.0.1:8000/api/districts');
  }

  deleteDistrict(id){
    return this.httpClient.delete<District[]>('http://127.0.0.1:8000/api/districts/'+id);
  }

  insertDistrictData(data):Observable<District>
  {
    return this.httpClient.post<District>('http://127.0.0.1:8000/api/districts',data);
  }

  editDistritc(data, id){
    return this.httpClient.put('http://127.0.0.1:8000/api/districts/'+id, data);
  }
}
