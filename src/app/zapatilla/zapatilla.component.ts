import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatilla',
  templateUrl: './zapatilla.component.html',
  styleUrls: ['./zapatilla.component.css']
})
export class ZapatillaComponent implements OnInit{

  public zapatillas: Array<Zapatilla>;
  public marcas:string[];

  constructor(){
      this.marcas=new Array();
      this.zapatillas=[
      new Zapatilla('Nike Air', 'Nike', 'Rojo',90),
      new Zapatilla('Adidas Boost', 'Adidas', 'Blanco',200),
      new Zapatilla('Puma Sport', 'Puma', 'Negro',80),
      new Zapatilla('Sport', 'Acsis', 'Azul',180),
    ];
  }
  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla)=>{
      this.marcas.push(zapatilla.marca);
    });
  }

}
