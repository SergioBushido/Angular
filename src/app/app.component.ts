import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'master';

  mostrarLibros: boolean = true;
  mostrarPeliculas: boolean = true;

  toggleLibros() {
    this.mostrarLibros = !this.mostrarLibros;
    console.log(this.mostrarLibros ? "Mostrando libros" : "Ocultando libros");
  }

  togglePeliculas() {
    this.mostrarPeliculas = !this.mostrarPeliculas;
    console.log(this.mostrarPeliculas ? "Mostrando películas" : "Ocultando películas");
  }
}
