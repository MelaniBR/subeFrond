import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Viaje} from '../model/viaje-model';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private baseUrl = 'http://localhost:8080/trips';
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef variable-name
  getTripsBySubeId(id: string ) {
    return this.http.get<Viaje[]>(`${this.baseUrl}/${id}`);
  }
}
