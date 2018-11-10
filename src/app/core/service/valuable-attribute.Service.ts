import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { ValuableAttribute } from '../model/subtypes/valuable-attribute';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ValuableAttributeService {

  collection: AngularFirestoreCollection<ValuableAttribute>
  observableList: Observable<ValuableAttribute[]>[] = []
  totalItems: number[] = []

  constructor(private firestore: AngularFirestore) {
    this.fetchObservable('battery')
    this.fetchObservable('cameraPhoto')
    this.fetchObservable('cameraVideo')
    this.fetchObservable('gimbal')
    this.fetchObservable('rcType')
  }

  fetchObservable(path: string) {
    this.collection = this.firestore.collection<ValuableAttribute>(path)
    this.observableList[path] = this.collection.snapshotChanges().pipe(
      map(items => {
        this.totalItems[path] = items.length
        return items.map(item => {
          const data = item.payload.doc.data() as ValuableAttribute
          const $id = item.payload.doc.id
          return {$id, ...data}
        })
      })
    )
  }

  insertValue(path: string, value: ValuableAttribute) {
    this.firestore.collection(path).add({
      order: value.order,
      value: value.value
    })
  }

  updateValue(path: string, value: ValuableAttribute) {
    return this.firestore.doc(`${path}/${value['$id']}`).update(
      {
        value: value.value,
        order: value.order
      }
    )
  }

  deleteValue(path: string, value: ValuableAttribute) {
    this.firestore.doc(`${path}/${value['$id']}`).delete()
  }

}
