import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de empleados';
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;


  empleados:Empleado[]=[

    new Empleado("Sergio","Fernández","Presidente",7500),
    new Empleado("Ana","Prada","Directora",5500),
    new Empleado("Carlos","García","Jefe sec",3500),
    new Empleado("Antoniuo","Menéndez","Admin",2500),
  ];


 
  empleadoAgregado(empleado:Empleado){
    this.empleados.push(empleado);
  }
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
}
