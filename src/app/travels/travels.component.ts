import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
	products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
