import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts-components/posts/posts.component';
import { PostDataService } from './posts-services/post-data.service';
import { PostComponent } from './posts-components/post/post.component';
import { PostDetailsComponent } from './posts-components/post-details/post-details.component';
import { PostResolveService } from './posts-services/resolvers/post-resolve.service';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [
    PostDataService,
    PostResolveService
  ]
})
export class PostsModule { }
