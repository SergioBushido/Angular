import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {


  nombre ="sergio";
  apellidos ="fernandez";
  private edad =8;
  //empresa ="smj";


  getEdad(){
    return this.edad>=18 ? "mayor de edad":"menor de edad"}

  llamaEmpresa(value:String){}
  
}
