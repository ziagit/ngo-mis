import { aboutus } from './aboutus';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  url: string = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  addAB(data){
    return this.http.post(this.url+'abouts',data);
  }

  getAbouts():Observable<aboutus[]>{
   return this.http.get<aboutus[]>(this.url+'abouts');
  }

  deleteAbout(id):Observable<aboutus>{
    return this.http.delete<aboutus>('http://127.0.0.1:8000/api/abouts/'+id)
  }

  editAbout(data,id):Observable<aboutus>{
    console.log(data, id);
    return this.http.put<aboutus>('http://127.0.0.1:8000/api/abouts/'+data,id);
  }
}
