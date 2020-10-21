import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubeService } from 'src/app/server/sube.service';
import { Sube } from 'src/assets/sube-model';
import { Viaje } from '../../../assets/viaje-model';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {

  public viajes: Viaje[];
  constructor(private activatedRoute: ActivatedRoute,

              private subeService: SubeService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        const id = params.id;
        this.fetchSube(id);
      });
  }
  fetchSube(id: string) {
    this.subeService.getSubeById(id).subscribe(sube => { this.viajes = sube.viajes })
  }


}
