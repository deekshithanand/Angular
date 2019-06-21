import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  isLiked=false;
  totalLikes=10;
  constructor() { }

  ngOnInit() {
  }
like(){
  this.isLiked=!this.isLiked;
  this.isLiked? this.totalLikes++ : this.totalLikes-- ;
}
}
