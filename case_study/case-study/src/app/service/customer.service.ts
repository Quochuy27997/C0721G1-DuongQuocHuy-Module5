import { Injectable } from '@angular/core';
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [
    {
      id:1,
      code:'KH-0001',
      type: {id:1,type:'Diamond'},
      name:'Lê An',
      birthday:'2000-02-02',
      idCard:'201605626',
      phone:'0947829245',
      email:'tan@gmail.com',
      address:'Da Nang',
    },
    {
      id:2,
      code:'KH-0002',
      type: {id:3,type:'Gold'},
      name:'Trần Thị Bê',
      birthday:'2000-02-02',
      idCard:'201605626',
      phone:'0947829245',
      email:'tan@gmail.com',
      address:'Da Nang',
    },
    {
      id:4,
      code:'KH-0003',
      type: {id:3,type:'Member'},
      name:'Trần Văn Cê',
      birthday:'2000-02-02',
      idCard:'201605626',
      phone:'0947829245',
      email:'tan@gmail.com',
      address:'Da Nang',
    },
  ]

  constructor() {
  }
  getAll(){
    return this.customerList;
  }

  saveCustomer(customer) {
    this.customerList.push(customer);
  }

  findById(id: number) {
    return this.customerList.find(category => category.id === id);
  }

  updateCategory(customer: Customer) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === customer.id) {
        this.customerList[i] = customer;
      }
    }
  }
  deleteCustomer(id: number) {
    this.customerList.splice(this.customerList.findIndex(cus=>cus.id===id),1);
  }
}
