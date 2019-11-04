import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshEmpTypeService {
  subject = new Subject();
  

  constructor() { }

  setReresh(rf)
  {
    this.subject.next('rf');
  }

  getRefresh()
  {
    return this.subject.asObservable();
  }
}
