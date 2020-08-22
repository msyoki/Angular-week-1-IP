import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.','William W. Purkey',new Date(2020,3,14)),
    new Quote(2,'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.',' Neil Gaiman',new Date(2020,3,14)),
    new Quote(3,'Do one thing every day that scares you',' Eleanor Roosevelt',new Date(2020,3,14)),

  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
