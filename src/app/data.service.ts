import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('random message');
  public map2 = new Map<String, String>();
  public pole = Array<string>();
  public map = new Map([
    [ "A", 1 ],
    [ "B", 2 ],
    [ "C", 3 ]
]);
    private nieco = new BehaviorSubject(this.map);
  currentMessage = this.messageSource.asObservable();
  map1=this.nieco.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}