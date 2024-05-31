import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }

  
  empleados:Empleado[]=[

    new Empleado("Sergio","Fernández","Presidente",7500),
    new Empleado("Ana","Prada","Directora",5500),
    new Empleado("Carlos","García","Jefe sec",3500),
    new Empleado("Antoniuo","Menéndez","Admin",2500),
  ];


  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);

  }

}
