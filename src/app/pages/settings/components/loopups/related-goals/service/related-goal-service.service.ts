import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RelatedGoal } from '../RelatedGoal';

@Injectable({
  providedIn: 'root'
})
export class RelatedGoalServiceService {
  headers:HttpHeaders = new HttpHeaders();
  
  constructor(private httpClient:HttpClient ) 
  { 
    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");
  }


  getRelatedGoal():Observable<RelatedGoal[]>{
      return this.httpClient.get<RelatedGoal[]>('http://127.0.0.1:8000/api/relatedgoals');
  }

  deleteRelatedGoalData(id){
      return this.httpClient.delete('http://127.0.0.1:8000/api/relatedgoals/'+id);
  }

  insertRelatedGoalData(data):Observable<RelatedGoal[]>{
    return this.httpClient.post<RelatedGoal[]>('http://127.0.0.1:8000/api/relatedgoals',data);
  }

  editRelatedGoal(data,id){
    return this.httpClient.put('http://127.0.0.1:8000/api/relatedgoals/'+id,data);
  }
}

