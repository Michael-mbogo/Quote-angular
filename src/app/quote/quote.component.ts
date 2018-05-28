import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes =[
    new Quote(1, 'I just finally discovered whats wrong with my brain on the left side there is nothing right and on the right side, there is nothing left.','By Michael.m'),
    new Quote(1, 'Me and my bed are perfect for each other, but my alarm clock keeps trying to break us up.','By Anderson.NJ'),
    new Quote(1, 'I changed my password everywhere to incorrect. That way when I forget it, it always reminds me.','By MattKinson'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
