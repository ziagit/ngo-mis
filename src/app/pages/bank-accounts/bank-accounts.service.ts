import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBankAccount } from './BankAccount';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountsService {

  constructor(private http: HttpClient) { }

  addBankAccounts(data){
    return this.http.post('http://localhost:8000/api/bankaccounts', data);
  }
  getBankAccounts():Observable<IBankAccount[]>{
    return this.http.get<IBankAccount[]>('http://localhost:8000/api/bankaccounts');
  }


}
