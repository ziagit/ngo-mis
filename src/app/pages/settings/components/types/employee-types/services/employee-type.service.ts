import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employeeType } from '../employeeType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {
 
  constructor(private http: HttpClient) { }

  getEmployeeType():Observable<employeeType[]>{
    return this.http.get<employeeType[]>('http://localhost:8000/api/employeeTypes');
  }

  deleteEmp(id)
  {
    return this.http.delete<employeeType[]>('http://localhost:8000/api/employeeTypes/'+id);
  }

  addEmptype(data):Observable<employeeType>
  {
    return this.http.post<employeeType>('http://127.0.0.1:8000/api/employeeTypes/',data);
  }
  
  updateEmpType(data,id)
  {
    
    return this.http.put('http://127.0.0.1:8000/api/employeeTypes/'+id,data);
  }

}
