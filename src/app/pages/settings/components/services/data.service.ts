import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
url:string='http://127.0.0.1:8000/';

  constructor(private httpClient:HttpClient ) { }


  getProvince(){
    return this.httpClient.get(this.url + 'provinces');
  }

  deleteProvince(id){
    return this.httpClient.delete(this.url + 'provinces'+id);
  }
}
