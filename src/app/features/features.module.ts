import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ContaComponent } from './conta/conta.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CadastroPagamentoComponent } from './cadastro-pagamento/cadastro-pagamento.component';
import { NavModule } from '../shared/nav/nav.module';


@NgModule({
  declarations: [
    CadastroComponent,
    CartComponent,
    LoginComponent,
    PaymentComponent,
    CardapioComponent,
    ContaComponent,
    PedidosComponent,
    CadastroPagamentoComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    NavModule
  ],
  exports: [
    CadastroComponent,
    CartComponent,
    LoginComponent,
    PaymentComponent,
    CardapioComponent,
    ContaComponent,
    PedidosComponent
  ]
})
export class FeaturesModule { }
