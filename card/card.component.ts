
import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

// Прописываем куда необходимо вставить компоненты в проэкте, которые мы экспортируем
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.components.scss'],
})

// Прописываем експорт компонентов в ангуляр
export class CardComponent implements OnInit {

  // Импортируем с библиотеки Ангуляра значения для проэкта
  @Input() card: Card
  @Input() index: number

  // Переменные с названиями
  title: string = 'Mi card Title'
  text: string = 'My sample text'

  // Создаем переменную для указания даты в проэкте
  cardDate: Date = new Date()

  // создаем переменную для цветов кнопок
  textColor = 'none'

  // метод для обработки любых дополнительных задач инициализации.
  ngOnInit() { }

  // Создаем функцию изменения текста при нажатии на кнопку в проэкте
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
