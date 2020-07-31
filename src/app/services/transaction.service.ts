import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transaction} from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  serviceUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  screenTransactions(transactions: Transaction[] ) {
    return this.http.post<Transaction[]>(this.serviceUrl + "/screen", transactions);
  }

}
