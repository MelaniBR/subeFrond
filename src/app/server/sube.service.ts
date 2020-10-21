import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sube } from 'src/assets/sube-model';
import {tap} from 'rxjs/operators';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubeService {
  private baseUrl = 'http://localhost:4000/sube';
  private sube: Sube;
  // map de subes
  constructor(private http: HttpClient) { }
  getSubes() {
    return this.http.get<Sube[]>(this.baseUrl);
  }

  getSubeById(id: string) : Observable<Sube> {
    if(this.sube){
      return of(this.sube) ;
    }
    return this.http.get<Sube>(`${this.baseUrl}/${id}`).pipe(tap(sube => this.sube = sube));
  }
  putSube(id: string, changes: Partial<Sube>) {
    return this.http.put(`${this.baseUrl}/${id}`, changes);
  }

}








