import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';


export enum ModalState {
  OPEN = "OPEN",
  CLOSE = "CLOSE"
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display = new BehaviorSubject<ModalState>(ModalState.CLOSE);

  watch(): Observable<ModalState> {
    return this.display.asObservable();
  }

  open() {
    this.display.next(ModalState.OPEN);
  }

  close() {
    this.display.next(ModalState.CLOSE);
  }
}
