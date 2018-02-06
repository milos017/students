import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

messages: string[] = [];

addNewMessage( newMessage: string) {
this.messages.push(newMessage);

}

clearMessages() {
  this.messages = [];
}
  constructor() { }

  ngOnInit() {
  }

}
