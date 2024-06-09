import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './components/article/article.component';
import { PhoneComponent } from './components/phone/phone.component';
import { PhoneService } from './services/phone.service';
import { ArticleService } from './services/article.service';
import { BlogComponent } from './components/blog/blog.component';
import { BlogService } from './services/blog.service';
import { CodeComponent } from './components/code/code.component';
import { CodeService } from './services/code.service';
import { ProjectService } from './services/project.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    UserListComponent,
    ArticleComponent,
    PhoneComponent,
    BlogComponent,
    CodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [PhoneService,
    ArticleService, BlogService, CodeService, PhoneService, ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
