import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { budjetType } from '../budjetType';

@Injectable({
  providedIn: 'root'
})
export class BudjetTypeService {
url:string = "http://127.0.0.1:8000/api/";

  constructor( private http:HttpClient) { }

  getBudjetType():Observable<budjetType[]>{
    return this.http.get<budjetType[]>('http://127.0.0.1:8000/api/budjetTypes');
  }

  deleteBudjetType(id)
  {
    return this.http.delete('http://127.0.0.1:8000/api/budjetTypes/'+id);
  }

   budjetTypesadd(data):Observable<budjetType>
  {
     return this.http.post<budjetType>(this.url+'budjetTypes',data);
   }

   editBudjetType(data,id){
    
     return this.http.put('http://127.0.0.1:8000/api/budjetTypes/'+id,data);
   }
  
}
