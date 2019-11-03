import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssessmentTypeService {

  constructor(private http: HttpClient) { }

  getAssessments(){
    return this.http.get('http://localhost:8000/api/assessments');
  }
}
