import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Province } from '../provinces/Province';




@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  headers:HttpHeaders = new HttpHeaders();
  url: string = 'http://127.0.0.1:8000/api/';

  constructor(private httpClient:HttpClient ) 
  { 
    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");
  }

  getProvince():Observable<Province[]>{
    return this.httpClient.get<Province[]>(this.url+'provinces');
  }

  deleteProvince(id){
    return this.httpClient.delete<Province[]>('http://127.0.0.1:8000/api/provinces/'+id);
  }

  insertProvinceData(data):Observable<Province>
  {
    return this.httpClient.post<Province>('http://127.0.0.1:8000/api/provinces',data);
  }
  editProvince(data, id){
    return this.httpClient.put(this.url+'provinces/'+id, data);
  }

}
