import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { equipment } from '../equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }  

  getEquipment():Observable<equipment[]>{
    return this.http.get<equipment[]>('http://127.0.0.1:8000/api/equiptypes');
  }

  deleteEptType(id){
    return this.http.delete<equipment[]>("http://127.0.0.1:8000/api/equiptypes/"+id);
  }

  addEquiptType(data){
    return this.http.post<equipment[]>('http://127.0.0.1:8000/api/equiptypes',data)
  }

}
