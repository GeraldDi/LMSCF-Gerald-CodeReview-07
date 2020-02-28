import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 items;
 checkoutForm;
 tprice;

 constructor( public cartService: CartService, public formBuilder: FormBuilder) {
         this.checkoutForm = this.formBuilder.group({
     name: '',
     address: '',
     emaila:''
   });
 }

 ngOnInit() {
         this.items = this.cartService.getItems();
         let tprice = 0;
         for (let i=0;i<this.items.length;i++){
         tprice += this.items[i].price;
         console.log("tprice:"+tprice)
         // this.tprice =tprice;
     }
     if (tprice >500){
     	this.tprice=tprice*0.8;
     }else if (tprice>200){
     	this.tprice=tprice*0.9;
     }else{
     	this.tprice =tprice;
     }



 }
 onSubmit(customerData) {
   // Process checkout data here
   console.warn('Your order has been submitted', customerData);
   window.alert("Thank you for your purchase "+ customerData.name+"! A confirmation mail will be sent to "+customerData.emaila);

   this.items = this.cartService.clearCart();
   this.checkoutForm.reset();
 }

}
