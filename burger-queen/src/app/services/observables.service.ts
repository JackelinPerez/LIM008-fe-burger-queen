import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  private menuSelect = new BehaviorSubject({});
  public currentMenu = this.menuSelect.asObservable();
  constructor() { }

  changeMenu(value: any){
    this.menuSelect.next(value);
  }
}
