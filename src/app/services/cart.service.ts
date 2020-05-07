import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'

@Injectable({
  providedIn: 'root'
})

export class CartService {


  cartProduct: productsModel = [];
  total: number = 0

  constructor() { 
  }

  add(id: number){
    console.log('Add product id: '+id+' to cart');
    this.total+=1
  }
  
  getTotal(){
    return this.total;
  }

}
