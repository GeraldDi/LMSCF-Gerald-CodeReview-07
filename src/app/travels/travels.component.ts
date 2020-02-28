import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
	products = products;
	product;


   newloc = new FormGroup({
     name: new FormControl('',Validators.required),
     description: new FormControl('',Validators.required),
     start:new FormControl('',Validators.required),
     duration:new FormControl('',Validators.required),
     price: new FormControl('',Validators.required),
     // img: new FormControl('',Validators.required),
   });

  constructor(public cartService: CartService) { }

   addToCart(product) {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(product);
 }

  ngOnInit(): void {
  }
    onSubmit(){

    if(this.newloc.valid){
      var a = this.newloc.value;
      console.log(a)
      this.products.push(a);
   }
  }
}
