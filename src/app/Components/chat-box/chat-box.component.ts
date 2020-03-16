import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ChatService} from '../../../services/chat/chat.service';
import {Message} from '../../../Models/messageModel';
import {AuthService} from '../../../services/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']

})
export class ChatBoxComponent implements OnInit, AfterViewInit {

  @ViewChild('dialog', {static: true}) dialogRef: HTMLElement;
  messages: Message[] = [];
  chatForm: FormGroup;

  constructor(public chatSv: ChatService, public authSv: AuthService) {
  }


  onMessageSubmit() {

    this.chatSv.submitMessageToChat('first', {
      messageContent: this.chatForm.get('message').value,
      date: Date.now(),
      uId: this.authSv.user.displayName
    }).then(() => {
      this.chatForm.controls.message.setValue('');
    });


  }


  ngAfterViewInit(): void {

  }

  ngOnInit() {


    this.chatSv.getChatCollection().subscribe((docs) => {
      docs.forEach((doc) => {
        this.chatSv.chats.push({name: doc.data().name, id: doc.data().id});
        this.chatSv.getChatMessagesByName('first').valueChanges().subscribe((messages: Message[]) => {
          this.messages = messages;
          this.messages.sort((a, b) => {
            if (a.date > b.date) {
              return 1;
            }
            if (a.date < b.date) {
              return -1;
            }
            return 0;
          });
        });
      });

    });

    this.chatForm = new FormGroup({
      message: new FormControl(''),
    });


  }


}
