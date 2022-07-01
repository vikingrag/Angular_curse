
import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.components.scss'],
})
export class CardComponent implements OnInit {

  @Input() card: Card
  @Input() index: number

  title: string = 'Mi card Title'
  text: string = 'My sample text'

  cardDate: Date = new Date()

  textColor = 'none'

  ngOnInit() { }

  changeTitle() {
    this.card.title = 'TITLE HAS BEEN CHANGE!'
  }

  inputHandler(value: any) {
    //  const value = event.target.value
    this.title = value
  }

  changeHandler() {

  }
}
