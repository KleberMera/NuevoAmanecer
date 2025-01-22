import { Rol } from './rol';

export interface Usuario {
  id?: number;
  rolId: number;
  cedula: string;
  nombreComercial: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  estado: boolean;
  rol: Rol;
}
