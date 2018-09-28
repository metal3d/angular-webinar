import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from "./components/blog/posts/posts.component";
import { PostViewComponent } from "./components/blog/post-view/post-view.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {path: "", component: HomeComponent, }, // default
  {path: "posts/:id", component: PostViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
