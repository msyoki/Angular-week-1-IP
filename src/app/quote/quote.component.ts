import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {name:'You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.',author:'William W. Purkey'},
    {name:'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.',author:' Neil Gaiman'},
    {name:'Do one thing every day that scares you',author:' Eleanor Roosevelt'},

  ];

  constructor() { }
  

  ngOnInit(): void {
  }

}
