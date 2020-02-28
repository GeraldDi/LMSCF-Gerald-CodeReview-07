import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
	products = products;
	product;

  constructor(public cartService: CartService) { }

   addToCart(product) {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(product);
 }

  ngOnInit(): void {
  }

}
