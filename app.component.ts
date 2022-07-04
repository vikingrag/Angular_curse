import { Component } from '@angular/core';

// экспортируем елементы
export interface Card {
  title: string
  text: string
}
// декоратор Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // создаем переменную для работы с кнопкой, которая, при нажатии убирает карточки с проэкта и после очередного нажатия возвращает карточки обратно
  toggle = true

  // создаем массив состоящий из обьектов с типами и названиями карточек в проэкте
  cards: Card[] = [
    { title: 'Card 1', text: 'This is card number 1' },
    { title: 'Card 2', text: 'This is card number 2' },
    { title: 'last card', text: 'This is a last card' }

  ]

  // Прописываем функцию для кнопки, которая, при нажатии убирает карточки с проэкта и после очередного нажатия возвращает карточки обратно
  toggleCards() {
    this.toggle = !this.toggle
  }
}


