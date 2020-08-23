import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    
    new Quote(1,"Musyoki Mutua",'William W. Purkey','You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.',new Date(2020,7,22)),
    new Quote(2,"Musyoki Mutua",' Neil Gaiman','Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.',new Date(2020,7,21)),
    new Quote(3,"Musyoki Mutua",' Eleanor Roosevelt','Do one thing every day that scares you',new Date(2020,7,20)),

  ];
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  ngOnInit(): void {
  }
  
}
