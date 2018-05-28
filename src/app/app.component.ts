import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  quotes=[
    new Quote(1, 'I just finally discovered whats wrong with my brain on the left side there is nothing right and on the right side, there is nothing left'),
    new Quote(1, 'Me and my bed are perfect for each other, but my alarm clock keeps trying to break us up.'),
  ]
}
