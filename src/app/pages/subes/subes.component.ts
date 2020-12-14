import { Component, OnInit } from '@angular/core';
import { Sube } from '../../model/sube-model';
import { SubeService } from '../../service/sube.service';
import {Router} from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-subes',
  templateUrl: './subes.component.html',
  styleUrls: ['./subes.component.css']
})
export class SubesComponent implements OnInit {
  subes: Sube[] = [];
  constructor(
    private router: Router,
    private subeService: SubeService) { }

  ngOnInit(): void {
    this.fetchSube();
  }

  // tslint:disable-next-line:typedef
  clickSube(id: number){

    this.router.navigate([id]);
  }
  // tslint:disable-next-line:typedef
  fetchSube() {
    // tslint:disable-next-line:variable-name
    this.subeService.getSubes().subscribe(_subes => { this.subes = _subes; });

  }
}



