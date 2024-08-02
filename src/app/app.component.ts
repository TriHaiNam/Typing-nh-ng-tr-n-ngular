import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {}

  buttonTop = 'QWERTYUIOP';
  buttonMid = 'ASDFGHJKL';
  buttonBot = 'ZXCVBNM';

  title = 'First-Project';

  time = 65;
  points = 0;
  input = '';

  myWords = [
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'grape',
    'honeydew',
    'kiwi',
    'lemon',
    'mango',
    'nectarine',
    'orange',
    'pear',
    'quince',
    'raspberry',
    'strawberry',
    'tangerine',
    'watermelon',
  ];

  word = '';

  changeWord() {
    let timeInterval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * this.myWords.length);
      console.log(randomIndex);
      this.word = this.myWords[randomIndex];
      clearInterval(timeInterval);
    }, 3000);
  }

  startTimer() {
    let timeInterval = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  startGame() {
    this.startTimer();
    this.changeWord();
  }

  checkWord() {
    if (this.input == this.word) {
      this.points++;
      this.input = '';
      alert('Correct Word');
    } else {
      this.input = '';
      alert('Wrong Word');
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      this.checkWord();
    }
  }
}
