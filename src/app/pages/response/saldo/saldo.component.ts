import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubeService } from '../../../service/sube.service';
import { Sube } from '../../../model/sube-model';




@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  public sube: Sube;



  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private subeService: SubeService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        const id = params.id;

        this.fetchSube(id);


      });
  }
  // tslint:disable-next-line:typedef
  fetchSube(id: string) {
    this.subeService.getSubeById(id).subscribe(sube => { this.sube = sube; });
  }
  // tslint:disable-next-line:typedef
  irACargarSaldo() {
    this.router.navigate([this.sube.id, 'cargarSaldo']);
  }
  // tslint:disable-next-line:typedef
  irAlIncio(){
    this.router.navigate(['']);
  }
}


