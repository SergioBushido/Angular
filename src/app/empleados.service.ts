import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService, private dataService:DataServices) { }

  empleados:Empleado[]=[];
  /*empleados:Empleado[]=[

    new Empleado("Sergio","Fernández","Presidente",7500),
    new Empleado("Ana","Prada","Directora",5500),
    new Empleado("Carlos","García","Jefe sec",3500),
    new Empleado("Antoniuo","Menéndez","Admin",2500),
  ];*/

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados;

  }

  obtenerEmpleados(){
    return this.dataService.cargarEmleados();//esto devuelve un observable..actualiza los cambios en tiempo real
  }


  agregarEmpleadoServicio(empleado:Empleado){
    
    this.servicioVentanaEmergente.muestraMensaje("persona que se va a agregar: " + "\n" +
    empleado.nombre + "\n" + "salario: " + empleado.salario);

    
    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados);

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

    this.dataService.actualizarEmpleados(indice, empleado);

  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);

  }

}
