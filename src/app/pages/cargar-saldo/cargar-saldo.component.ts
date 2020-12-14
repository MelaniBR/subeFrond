import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Sube} from 'src/app/model/sube-model';
import {SubeService} from '../../service/sube.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cargar-saldo',
  templateUrl: './cargar-saldo.component.html',
  styleUrls: ['./cargar-saldo.component.css']
})
export class CargarSaldoComponent implements OnInit {
  public sube: Partial<Sube>;
  public saldo = 0;
  private id: string;

  constructor(private activatedRoute: ActivatedRoute,
              private routes: Router,
              private subeService: SubeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.id = params.id;
        this.fetchSube(this.id);
      });

  }

  cargarSaldo(): void {

    this.subeService.putSube(this.id, this.saldo).subscribe(sube => console.log(sube));

  }

  fetchSube(id: string): void {
    this.subeService.getSubeById(id).subscribe(sube => {
      this.sube = sube;
    });
  }

  // tslint:disable-next-line:typedef
  irASubePorId() {
    this.routes.navigate([this.sube.id]);
  }


}
