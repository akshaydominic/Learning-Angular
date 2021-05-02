import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './SalesPerson';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  mysalesperson:SalesPerson[] =[
    new SalesPerson("john","wick","johnlovepuppies@gmail.com",400),
    new SalesPerson("erin","yeager","angerissues@gmail.com",500),
    new SalesPerson("batman","none","lovesBlack@gmail.com",0),
    new SalesPerson("tanjero","kimenstunoYaiba","protectorofhumans@gmail.com",0)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
