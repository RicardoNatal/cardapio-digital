import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent implements OnInit {
  constructor() {}

  produtos = [
    {
      nome: 'Poke de Salmão',
      descricao: 'Poke de salmão com vários acompanhamentos muito foda.',
      preco: 38,
      quantidade: 1,
      imageUrl:
        'https://img.cybercook.com.br/receitas/364/poke-classico-de-salmao-1.jpeg',
    },
    {
      nome: 'Poke de Salmão',
      descricao: 'Poke de salmão com vários acompanhamentos muito foda.',
      preco: 38,
      quantidade: 1,
      imageUrl:
        'https://img.cybercook.com.br/receitas/364/poke-classico-de-salmao-1.jpeg',
    },
    {
      nome: 'Poke de Salmão',
      descricao: 'Poke de salmão com vários acompanhamentos muito foda.',
      preco: 38,
      quantidade: 1,
      imageUrl:
        'https://img.cybercook.com.br/receitas/364/poke-classico-de-salmao-1.jpeg',
    },
    {
      nome: 'Poke de Salmão',
      descricao: 'Poke de salmão com vários acompanhamentos muito foda.',
      preco: 38,
      quantidade: 1,
      imageUrl:
        'https://img.cybercook.com.br/receitas/364/poke-classico-de-salmao-1.jpeg',
    },
    {
      nome: 'Poke de Salmão',
      descricao: 'Poke de salmão com vários acompanhamentos muito foda.',
      preco: 38,
      quantidade: 1,
      imageUrl:
        'https://img.cybercook.com.br/receitas/364/poke-classico-de-salmao-1.jpeg',
    },
  ];

  quantidade = 1;

  aumentar(item: any) {
    item.quantidade += 1;
  }

  diminuir(item: any) {
    item.quantidade -= 1;
  }

  ngOnInit(): void {}
}
