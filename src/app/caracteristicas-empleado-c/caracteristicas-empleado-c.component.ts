import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {

  //para pasar info de hijo a padre, esto y el metodo esta en la documentacion
  //components share data
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregaCaracteristicas(value : string){
    this.caracteristicasEmpleados.emit(value);
  }

}
