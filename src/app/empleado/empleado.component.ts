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
  empresa ="smj";
 

  habilitacionCuadro=true;
  usuRegistrado=false;
  textoDeRegistro="no hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false
  }

  getEdad(){
    return this.edad>=18 ? "mayor de edad":"menor de edad"}

  llamaEmpresa(value:String){}

  //$event indica dentro del parentesis de la funcion que hay un evento...ese evento es de tipo HTMLInputElement y puede recuperar los "values" declarados
  setUsuarioRegistrado(even:Event){
   // alert("Usuario Registrado")
   if((<HTMLInputElement>event?.target).value=="si"){
    this.textoDeRegistro="Usuario Registrado";
   }else{
    this.textoDeRegistro="Usuario no registrado";

   }
  }

 
  
}
