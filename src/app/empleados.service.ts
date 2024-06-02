import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService) { }

  
  empleados:Empleado[]=[

    new Empleado("Sergio","Fernández","Presidente",7500),
    new Empleado("Ana","Prada","Directora",5500),
    new Empleado("Carlos","García","Jefe sec",3500),
    new Empleado("Antoniuo","Menéndez","Admin",2500),
  ];


  agregarEmpleadoServicio(empleado:Empleado){
    
    this.servicioVentanaEmergente.muestraMensaje("persona que se va a agregar: " + "\n" +
    empleado.nombre + "\n" + "salario: " + empleado.salario);

    
    this.empleados.push(empleado);

  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];
    return empleado;

  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let empleadoModificado=this.empleados[indice];
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);

  }

}
