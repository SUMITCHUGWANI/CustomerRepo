import { Component, OnInit } from '@angular/core';
import {Customer, CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  get customer(): Customer[] {
    return this._customer;
  }

  set customer(value: Customer[]) {
    this._customer = value;
  }

  private _customer: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomer().
    then(customer => this._customer = customer);
  }

}
