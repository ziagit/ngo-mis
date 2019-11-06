import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshEquiptTypeService {

  subject = new Subject();
  
  constructor() { }

  setReshresh(rf)
  {
    this.subject.next(rf);
  }

  getRefresh()
  {
    return this.subject.asObservable();
  }
}
