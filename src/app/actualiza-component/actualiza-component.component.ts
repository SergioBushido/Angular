import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent {

  
  //para que el boton de volver funcione hay que inyectar Router en el constructor
  //y utilizar navigate con la ruta donde queremos ir
  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empeladosService:EmpleadosService){

  }

  empleados:Empleado[]=[]

  ngOnInit(): void {
    this.empleados=this.empeladosService.empleados;
  }

  

  volverHome(){
    this.router.navigate([""]);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

 

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    this.empeladosService.agregarEmpleadoServicio(miEmpleado);//es el segundo paramtro del constructor
    this.router.navigate([""]);
  }
}
