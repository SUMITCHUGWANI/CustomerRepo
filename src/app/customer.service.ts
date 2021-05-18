import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Customer {
  name: String;
  mail: String;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}
  getCustomer() {
    return this.http.get<any>('assets/customer.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }
}
