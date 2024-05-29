import { Component } from '@angular/core';
import { Empleados } from './empleados.model';

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

  empleados:Empleados[]=[

    new Empleados("Sergio","Fernández","Presidente",7500),
    new Empleados("Ana","Prada","Directora",5500),
    new Empleados("Carlos","García","Jefe sec",3500),
    new Empleados("Antoniuo","Menéndez","Admin",2500),
  ];


  agregarEmpleado(){
    let miEmpleado=new Empleados(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
 
}
