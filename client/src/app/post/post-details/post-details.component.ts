import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PostService } from "./../../post.service";
import { Post } from "../post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Post = {
    category: '',
    id: '',
    postTitle: '',
    postAuthor: '',
    postDesc: '',
    postContent: '',
    postReference: '',
    postImgUrl: '',
    created: null,
    updated: null
  };
  isLoadingResult = true;

  constructor(private route: ActivatedRoute, private api: PostService, private router: Router) { }

  ngOnInit() {
  }

  getPostDetails(id: any) {
    this.api.getPost(id).subscribe((data: any) => {
      this.post = data;
      this.post.id = data._id;
      console.log(this.post);
      this.isLoadingResult = false;
    });
  }

  deletePost(id: any) {
    this.isLoadingResult = true;
    this.api.deletePost(id).subscribe(res => {
      this.isLoadingResult = false;
      this.router.navigate(['/post']);
    }, err => {
      console.log(err);
      this.isLoadingResult = false;
    });
  }

}
