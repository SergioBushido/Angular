import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent {
  empleados:Empleado[]=[]

  accion:number;
  
  //para que el boton de volver funcione hay que inyectar Router en el constructor
  //y utilizar navigate con la ruta donde queremos ir
  constructor(private router:Router,private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empeladosService:EmpleadosService){

  }

  

  ngOnInit(): void {

    this.accion=parseInt(this.route.snapshot.queryParams['accion']);
    this.empleados=this.empeladosService.empleados;
    this.indice=this.route.snapshot.params['id'];//todo esto para capturar el id de la URL
    let empleado:Empleado=this.empeladosService.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  

  volverHome(){
    this.router.navigate([""]);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  indice:number;

 
/*
  actualizaEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    this.empeladosService.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate([""]);
  }

  eliminaEmpleado(){

    this.empeladosService.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
  }
  */

  actualizaEmpleado(){
    if(this.accion==1){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    this.empeladosService.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate([""]);
    }else{
    this.empeladosService.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
  }
  }
}
