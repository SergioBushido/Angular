import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
//Hemos creado un servicio (servicio-empleados) primero se registra en appmodule y despues de inyecta creando el
//contructor en el componente principal
//luego lo hemos metido en agregarEmpleado para que al darle al boton nos muestre el msj



}
