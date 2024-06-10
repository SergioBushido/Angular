import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './components/article/article.component';
import { PhoneComponent } from './components/phone/phone.component';
import { BlogComponent } from './components/blog/blog.component';
import { CodeComponent } from './components/code/code.component';
import { TagComponent } from './components/tag/tag.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [

  { path: 'user-list', component: UserListComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'phones', component: PhoneComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'codes', component: CodeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'tags', component: TagComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
