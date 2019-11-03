import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBankAccount } from './BankAccount';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountsService {
  subject = new Subject();

  constructor(private http: HttpClient) { }

  setRefresh(rf){
    this.subject.next(rf);
  }
  getRefresh(){
    return this.subject.asObservable();
  }
  addBankAccounts(data){
    return this.http.post('http://localhost:8000/api/bankaccounts', data);
  }
  getBankAccounts():Observable<IBankAccount[]>{
    return this.http.get<IBankAccount[]>('http://localhost:8000/api/bankaccounts');
  }

  deleteAccountData(id)
  {
    return this.http.delete<IBankAccount[]>('http://localhost:8000/api/bankaccounts/'+id);
  }
  editAccountData(id){
    return this.http.get<IBankAccount[]>('http://localhost:8000/api/bankaccounts/'+id+"/edit");
  }


}
