import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  post = {title:"", body:"", author:""}

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // GET parameters are observed, so we need to subscribe and
    // manage what to do with it.
    this.route.params.subscribe((p)=>{
      this.api.getPost(p['id']).subscribe(p => this.post = p);
    })
  }
}
