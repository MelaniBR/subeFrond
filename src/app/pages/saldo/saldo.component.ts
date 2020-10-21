import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubeService } from '../../server/sube.service';
import { Sube } from '../../../assets/sube-model';




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
  fetchSube(id: string) {
    this.subeService.getSubeById(id).subscribe(sube => { this.sube = sube })
  }
  irACargarSaldo() {
    this.router.navigate([this.sube.id, 'cargarSaldo']);
  }
  irAlIncio(){
    this.router.navigate([""])
  }
}


