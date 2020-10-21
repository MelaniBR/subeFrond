import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sube } from 'src/assets/sube-model';
import { SubeService } from '../../server/sube.service';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cargar-saldo',
  templateUrl: './cargar-saldo.component.html',
  styleUrls: ['./cargar-saldo.component.css']
})
export class CargarSaldoComponent implements OnInit {
  public sube: Partial<Sube>;
  public saldo: number = 0 ;
  private id : string
  constructor(private activatedRoute: ActivatedRoute,
    private routes:Router,
    private subeService: SubeService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
         this.id = params.id;
         this.fetchSube(this.id);
      })

  }
  cargarSaldo() {
    this.sube = {
      nombreUsuario : this.sube.nombreUsuario,
      saldo: this.saldo + this.sube.saldo,
      viajes:this.sube.viajes
    };

    this.subeService.putSube(this.id, this.sube).subscribe(sube=> console.log(sube) );


  }
  
  
  fetchSube(id:string){
    this.subeService.getSubeById(id).subscribe(sube => {this.sube = sube});
  }

  irASubePorId(){
    this.routes.navigate([this.sube.id])
  }
  
  cargarSaldoSiEsPosible(){
  
  }


}
