import { Injectable } from '@angular/core';
import * as moment from 'jalali-moment';

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {
  dateObject;
 
  //OR if you have initial value you could use following code
  constructor() { 
  this.dateObject = moment('1395-11-22','jYYYY,jMM,jDD');

  }
}
