import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudjetTypeService {

  constructor(private http: HttpClient) { }

  getBudjetTypes(){
    return this.http.get('http://localhost:8000/api/budjet-types');
  }
}
