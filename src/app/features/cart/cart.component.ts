import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    {
      nome: "Pão Francês",
      preco: 0.5,
      quantidade: 4
    },
    {
      nome: "Coxinha",
      preco: 6,
      quantidade: 3
    },
    {
      nome: "Risolis",
      preco: 4.5,
      quantidade: 5
    },
  ]

}
