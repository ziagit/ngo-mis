import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RelatedTarget } from '../RelatedTarget';

@Injectable({
  providedIn: 'root'
})
export class RelatedTargetSerivceService {

  constructor(private http:HttpClient) 
  { 

  }

  getRelatedTargetData():Observable<RelatedTarget[]>{
    return this.http.get<RelatedTarget[]>('http://127.0.0.1:8000/api/relatedtargets');
  }

  deleteRelatedTarget(id){
    return this.http.delete('http://127.0.0.1:8000/api/relatedtargets/'+id);
  }

  insertRelatedTarget(data):Observable<RelatedTarget[]>{
    return this.http.post<RelatedTarget[]>('http://127.0.0.1:8000/api/relatedtargets',data);
  }

  editRelatedTarget(data,id){
    return this.http.put('http://127.0.0.1:8000/api/relatedtargets/'+id,data);
  }
}
