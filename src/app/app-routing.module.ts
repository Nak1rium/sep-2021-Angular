import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './app-components/home/home.component';

let routes:Routes = [
  {path:'',component: HomeComponent},
  {path:'users',loadChildren: () => import('./users/users.module').then(module => module.UsersModule)},
  {path:'posts',loadChildren: () => import('./posts/posts.module').then(module => module.PostsModule)},
  {path:'comments',loadChildren: () => import('./comments/comments.module').then(module => module.CommentsModule)}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}
