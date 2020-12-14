import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaldoComponent } from './pages/response/saldo/saldo.component';
import { CargarSaldoComponent } from './pages/cargar-saldo/cargar-saldo.component';
import { SubesComponent } from './pages/subes/subes.component';
import { ViajesComponent } from './pages/response/viajes/viajes.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { SubeInfoComponent } from './pages/sube-info/sube-info.component';



@NgModule({
  declarations: [
    AppComponent,
    SaldoComponent,
    CargarSaldoComponent,
    SubesComponent,
    ViajesComponent,
    HeaderComponent,
    SubeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
