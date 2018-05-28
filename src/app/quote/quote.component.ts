import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

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

  $(document).ready(function(){
    $("#up").click(function(){
    var up = $.post("/upvote", {changeBy: 1}, function(dataBack){

        $("#upvote").text(dataBack);
    });





  constructor() { }

  ngOnInit() {
  }

}
