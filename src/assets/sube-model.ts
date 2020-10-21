import {Viaje} from './viaje-model';
export interface Sube {
    id: number;
    nombreUsuario: string;
    saldo: number;
    viajes: Viaje[];
}
