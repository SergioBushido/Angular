import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './components/article/article.component';
import { PhoneComponent } from './components/phone/phone.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [

  { path: 'user-list', component: UserListComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'phones', component: PhoneComponent },
  { path: 'blog', component: BlogComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
