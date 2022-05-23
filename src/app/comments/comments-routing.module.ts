import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CommentsComponent } from './comments-components/comments/comments.component';
import { CommentDetailsComponent } from './comments-components/comment-details/comment-details.component';

const routes: Routes = [
  {path:'',component: CommentsComponent,children:[
      {path:':id',component:CommentDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
