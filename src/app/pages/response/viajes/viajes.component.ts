import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Viaje } from '../../../model/viaje-model';
import {TripsService} from '../../../service/trips.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {

  viajes: Viaje[];
  constructor(private activatedRoute: ActivatedRoute,

              private tripsService: TripsService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        const id = params.id;
        this.fetchSube(id);
      });
  }
  // tslint:disable-next-line:typedef
  fetchSube(id: string) {
    this.tripsService.getTripsBySubeId(id).subscribe(viajes => { this.viajes = viajes; });
  }


}
