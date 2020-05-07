import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type: new FormControl(''),
    id: new FormControl(''),
    name: new FormControl(''),
    detail: new FormControl(''),
    quantity: new FormControl('',[Validators.required, Validators.max(50),Validators.min(1)]),
    price: new FormControl('',[Validators.max(100000),Validators.min(1)]),
  });

  productType: string[] = ["CPU","RAM","HDD","Mainboard"];

  constructor() { }

  ngOnInit(): void {
  }

  get quantity(){
    return this.productForm.get('quantity');
  }

  get price(){
    return this.productForm.get('price');
  }

  addProduct(){
    
  }

}
