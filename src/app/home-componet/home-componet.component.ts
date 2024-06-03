import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';


@Component({
  selector: 'app-home-componet',
  templateUrl: './home-componet.component.html',
  styleUrl: './home-componet.component.css'
})
export class HomeComponetComponent {
  titulo = 'Listado de empleados';
  constructor(private miServicio:ServicioEmpleadosService, private empeladosService:EmpleadosService){}
 

  ngOnInit(): void {
    //this.empleados=this.empeladosService.empleados;//esto carga el array de empleados
    //aqui se cargan los datos de firebase a la pagina conb el subcribe y conb el object
    this.empeladosService.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);
      this.empleados=Object.values(misEmpleados);

      //esto es para que almacene los datos en el arry, sin esto solo se va mostrando uno y el nuevo pisa al anterior
      this.empeladosService.setEmpleados(this.empleados);
    });
  }

  empleados:Empleado[]=[]

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

 

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    this.empeladosService.agregarEmpleadoServicio(miEmpleado);//es el segundo paramtro del constructor
  }
}
