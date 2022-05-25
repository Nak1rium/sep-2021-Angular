import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CommentsComponent } from './comments-components/comments/comments.component';
import { CommentDetailsComponent } from './comments-components/comment-details/comment-details.component';
import { CommentResolveService } from './comments-services/resolvers/comment-resolve.service';
import { CommentGuardGuard } from './guards/comment-guard.guard';

const routes: Routes = [
  {path:'',component: CommentsComponent,canActivate: [CommentGuardGuard], children:[
      {path:':id',component:CommentDetailsComponent,resolve: {data: CommentResolveService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
