import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject();
  subject2 = new Subject();
  constructor() { }

  sendMsg(product: any){
    this.subject.next(product);
  }

  sendMsgId(id: number){
    this.subject2.next(id);
  }

  getMsg(){
    return this.subject.asObservable();
  }
  getMsg2(){
    return this.subject2.asObservable();
  }
}
