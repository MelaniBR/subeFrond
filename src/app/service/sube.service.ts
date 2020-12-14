import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sube} from 'src/app/model/sube-model';
import {tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubeService {
  private baseUrl = 'http://localhost:8080/sube';
  private subes: Map<string, Sube>;

  // map de subes
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getSubes() {
    return this.http.get<Sube[]>('http://localhost:8080/subes');
  }

  getSubeById(id: string): Observable<Sube> {
    if (this.subes) {

      return of(this.subes.get(id));
    }
    return this.http.get<Sube>(`${this.baseUrl}/${id}`).pipe(tap(sube => this.subes.set(id, sube)));
  }

  // tslint:disable-next-line:typedef
  putSube(id: string, newSaldo) {
    return this.http.put(`${this.baseUrl}/${id}`, newSaldo);
  }

}








