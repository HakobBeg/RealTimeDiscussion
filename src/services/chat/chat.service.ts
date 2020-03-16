import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Chat} from '../../Models/chatModel';
import {Message} from '../../Models/messageModel';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  loading = true;
  chats: { name: string, id: string }[] = [];

  constructor(private db: AngularFirestore) {

  }


  getChatCollection() {
    return this.db.collection('chats').get();
  }

  getChatMessagesByName(name: string) {
    let id;
    this.chats.forEach((chat) => {
      if (chat.name === name) {
        id = chat.id;
      }
    });
    return this.db.collection(`chats/${id}/messages`);
  }

  submitMessageToChat(name: string, message: Message) {
    let id;
    this.chats.forEach((chat) => {
      if (chat.name === name) {
        id = chat.id;
      }
    });

    return this.db.collection(`chats/${id}/messages`).add(message);

  }

}
