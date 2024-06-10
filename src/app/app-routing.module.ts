import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'zapatillas', component: ZapatillaComponent},
  {path:'peliculas', component: PeliculasComponent},
  {path:'cursos', component: CursosComponent},
  {path:'cursos/:nombre', component: CursosComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
