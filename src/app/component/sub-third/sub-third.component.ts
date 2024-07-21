import { Component } from "@angular/core";

@Component({
  selector: 'app-sub-third',
  templateUrl: './sub-third.component.html',
  styleUrls: ['./sub-third.component.scss']
})

export class SubThirdComponent {
  cards = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' },
    { title: 'Card 4', content: 'Content for Card 4' },
    { title: 'Card 5', content: 'Content for Card 5' },
    { title: 'Card 6', content: 'Content for Card 6' },
    { title: 'Card 7', content: 'Content for Card 7' },
    { title: 'Card 8', content: 'Content for Card 8' },
    { title: 'Card 9', content: 'Content for Card 9' }
  ];
}