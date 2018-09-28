import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../services/api.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];

  constructor(private api: ApiService) { }


  ngOnInit() {
    this.getPosts();
  }


  getPosts() {
    // call our api, and when it's ok we replace
    // this.posts by the given list.
    // WARNING for the example, we didn't set type, but
    // you SHOULD create class for "post".
    this.api.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

}
