import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private isShown: boolean = false
  private subject = new Subject<any>()


  toggleMenu(){
    this.isShown = !this.isShown
    this.subject.next(this.isShown)
  }

  onToggleMenu(){
    return this.subject.asObservable()
  }
}
