import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  public nombre: string | undefined;

  constructor( private _route: ActivatedRoute, private _router: Router
  ){
  }
  ngOnInit(): void { //para recoger parametros por url
   
     this._route.params.subscribe((params:Params)=>{

      //this.nombre=params.nombre;
      this.nombre=params['nombre'];
      console.log(params)
    });
  }

  //para la redireccion se usa indistintamente _router o router, lo primero es inyectarlo y luego usarlo con .navigate
  redirigir(){
    this._router.navigate(['/zapatillas']);
  }
}
