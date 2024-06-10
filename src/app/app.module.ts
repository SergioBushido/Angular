import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './components/article/article.component';
import { PhoneComponent } from './components/phone/phone.component';
import { BlogComponent } from './components/blog/blog.component';
import { CodeComponent } from './components/code/code.component';
import { TagComponent } from './components/tag/tag.component';

import { PhoneService } from './services/phone.service';
import { ArticleService } from './services/article.service';
import { BlogService } from './services/blog.service';
import { CodeService } from './services/code.service';
import { ProjectService } from './services/project.service';
import { ProjectComponent } from './components/project/project.component';

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
    TagComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PhoneService,
    ArticleService,
    BlogService,
    CodeService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
