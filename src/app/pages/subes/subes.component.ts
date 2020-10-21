import { Component, OnInit } from '@angular/core';
import { Sube } from '../../../assets/sube-model';
import { SubeService } from '../../server/sube.service';
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
  clickSube(id:string){
    
    this.router.navigate([id])
  }
  fetchSube() {
    this.subeService.getSubes().subscribe(_subes => { this.subes = _subes });
    
  }
}


  
