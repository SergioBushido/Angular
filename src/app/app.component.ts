import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  titulo = 'Listado de empleados';
//Hemos creado un servicio (servicio-empleados) primero se registra en appmodule y despues de inyecta creando el
//contructor en el componente principal
//luego lo hemos metido en agregarEmpleado para que al darle al boton nos muestre el msj
constructor(private miServicio:ServicioEmpleadosService, private empeladosService:EmpleadosService){
  //se puede hacer con onInit
  //this.empleados=this.empeladosService.empleados;
}
  ngOnInit(): void {
    this.empleados=this.empeladosService.empleados;
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  empleados:Empleado[]=[]

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    this.empeladosService.agregarEmpleadoServicio(miEmpleado);//es el segundo paramtro del constructor
  }
}
