import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";


@Injectable()
export class DataServices{
  constructor(private httClient:HttpClient) {} 

  cargarEmleados(){
    return this.httClient.get('https://mis-clientes-f97e0-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
  }

  guardarEmpleados(empleados:Empleado[]){
    this.httClient.put('https://mis-clientes-f97e0-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(
        Response=>console.log("se han guardado los empleados" +Response),
        error=>console.log("error"+ error),
    );
  }


  actualizarEmpleados(indice:number, empleado:Empleado){//hay que pasar el id del empleado a actualizar
    let url='https://mis-clientes-f97e0-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';
    this.httClient.put(url, empleado).subscribe(
        Response=>console.log("se han actualizado los empleados" +Response),
        error=>console.log("error"+ error),
    );
  }

 eliminarEmpleados(indice:number){
    let url='https://mis-clientes-f97e0-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';
    this.httClient.delete(url).subscribe(
        Response=>console.log("se eliminado el empleado" +Response),
        error=>console.log("error"+ error),
    );
  }
}