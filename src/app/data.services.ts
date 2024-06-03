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
}