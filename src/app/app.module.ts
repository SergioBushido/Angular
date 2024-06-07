import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    PeliculasComponent,
    ZapatillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
