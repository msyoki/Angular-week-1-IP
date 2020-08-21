import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {  
  @Input()   numberOfLikes : number = 0;
  likeButtonClick(){
    this.numberOfLikes ++;
  }
  dislikeButtonClick(){
    this.numberOfLikes --;
  }

  ngOnInit(): void {
  }

}
