import {Message} from './messageModel';

export interface Chat {
  id: string;
  createdDate: number;
  name: string;
  description: string;
  messages: Message[];
}
