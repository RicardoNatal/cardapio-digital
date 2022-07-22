import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPagamentoComponent } from './cadastro-pagamento/cadastro-pagamento.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CartComponent } from './cart/cart.component';
import { ContaComponent } from './conta/conta.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'cadastro-pagamento',
    component: CadastroPagamentoComponent
  },
  {
    path: 'cardapio',
    component: CardapioComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'conta',
    component: ContaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
