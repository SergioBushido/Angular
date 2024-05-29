import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje=""
  registrado=false
  nombre: string = "";  
  apellido: string = "";  
  cargo:string="";
  entradas: {titulo: string}[];  // Si no se especifica el tipo no funciona

  constructor(){
    this.entradas=[
      {titulo:"python cada día más presente"},
      {titulo:"Java presente desde 20 años"},
      {titulo:"JavaScript cada vez mas funciuonal"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Donde quedo Pascal?"}
    ];
  }

  registrarUsuario(){
    this.registrado=true;
    this.mensaje="Usuario Registrado";
  }
}
