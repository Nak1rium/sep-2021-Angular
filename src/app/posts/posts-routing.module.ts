import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PostsComponent } from './posts-components/posts/posts.component';
import { PostDetailsComponent } from './posts-components/post-details/post-details.component';
import { PostResolveService } from './posts-services/resolvers/post-resolve.service';

const routes: Routes = [
  {path:'',component: PostsComponent,children:[
      {path:':id',component:PostDetailsComponent,resolve: {data: PostResolveService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
