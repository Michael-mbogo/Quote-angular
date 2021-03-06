import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes =[
    new Quote(1, 'I just finally discovered whats wrong with my brain on the left side there is nothing right and on the right side, there is nothing left','By Michael.m',new Date(2017,2,8)),
    new Quote(1, 'Me and my bed are perfect for each other, but my alarm clock keeps trying to break us up','By Anderson.NJ',new Date(2018,6,7)),
    new Quote(1, 'I changed my password everywhere to incorrect. That way when I forget it, it always reminds me','By MattKinson',new Date(2018,6,7)),
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }




  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription
  }

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm('Are you sure you want to delelte $(this.quotes[index].name)')

      if(toDelete){
        this.quotes.splice(index,1)
      }


    }
  }

  upvote = 0;
  downvote = 0;

  add(){
    this.upvote=this.upvote+1;
  }

  sub(){
    this.downvote=this.downvote-1;
  }





  constructor() { }

  ngOnInit() {
  }

}
