import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionControlService {

  observableList: Observable<any>[] = []

constructor() { }


addObservable(observable: Observable<any>) {
  this.observableList.push(observable)
}

logout() {
  this.observableList.forEach(observable => {

  })
}

}
