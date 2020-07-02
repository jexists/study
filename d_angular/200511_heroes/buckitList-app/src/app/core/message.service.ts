import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
    document.querySelector('.msg').classList.add('hidden');
    document.querySelector('.data').classList.add('w-100');
  }
}
