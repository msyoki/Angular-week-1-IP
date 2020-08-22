import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent  {  
  @Input()   
  numberOfLikes : number = 0;
  numberOfDislikes : number = 0;

  likeButtonClick(){
    this.numberOfLikes +=1;
  }
  dislikeButtonClick(){
    this.numberOfDislikes +=1;
  }

  ngOnInit(): void {
  }

}
