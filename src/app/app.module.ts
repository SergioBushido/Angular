import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponetComponent } from './home-componet/home-componet.component';
import { ProyectosComponetComponent } from './proyectos-componet/proyectos-componet.component';
import { QuienesComponetComponent } from './quienes-componet/quienes-componet.component';
import { ContactoComponetComponent } from './contacto-componet/contacto-componet.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';

//esto se hace manualmente...routes es del core
const appRoutes:Routes=[

  {path:'', component:HomeComponetComponent},
  {path:'proyectos', component:ProyectosComponetComponent},
  {path:'quienes', component:QuienesComponetComponent},
  {path:'contacto', component:ContactoComponetComponent},
  {path:'actualiza/:id', component:ActualizaComponentComponent},
  {path:'**', component:ErrorPersonalizadoComponentComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponetComponent,
    ProyectosComponetComponent,
    QuienesComponetComponent,
    ContactoComponetComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)//le indicamos la constante que hemos creado para las rutas
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
