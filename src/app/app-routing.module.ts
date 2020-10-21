import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargarSaldoComponent } from './pages/cargar-saldo/cargar-saldo.component';
import { SubesComponent } from './pages/subes/subes.component';

import { SubeInfoComponent } from './pages/sube-info/sube-info.component';


const routes: Routes = [
  { path: '', component: SubesComponent},
  { path: ':id', component: SubeInfoComponent},
  {path: ':id/cargarSaldo', component: CargarSaldoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
