import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { ValuableAttribute } from '../model/subtypes/valuable-attribute';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValuableAttributeService {

  private subscription: Subscription[] = []

  collections: AngularFirestoreCollection<ValuableAttribute>[] = []
  totalItems: number[] = []
  filteredResults: number[] = []
  fixedList = []

  constructor(private firestore: AngularFirestore) {
    this.fetchObservable('battery')
    this.fetchObservable('cameraPhoto')
    this.fetchObservable('cameraVideo')
    this.fetchObservable('gimbal')
    this.fetchObservable('rcType')
  }

  fetchObservable(path: string) {
    let collection: AngularFirestoreCollection<ValuableAttribute>
    if (this.collections[path] == undefined) {
      collection = this.firestore.collection<ValuableAttribute>(path, ref => ref.orderBy('order'))
      this.collections[path] = collection
    }
    else
      collection = this.collections[path]
    this.subscription[path] = collection.snapshotChanges().subscribe(
      items => {
        this.totalItems[path] = items.length
        this.fixedList[path] = []
        return items.map(item => {
          let data = item.payload.doc.data() as ValuableAttribute
          data['$id'] = item.payload.doc.id
          this.fixedList[path].push(data)
        })
      }
    )
  }

  unfilteredList(path: string) {
    if (this.fixedList[path] == undefined)
      this.fixedList[path] = []
    return this.fixedList[path]
  }

  filter(path: string, field: string, value: string): ValuableAttribute[] {
    if (this.fixedList[path] == undefined)
      this.fixedList[path] = []
    let items: ValuableAttribute[] = (value != '') ? this.fixedList[path].filter(item => item[field].toLocaleLowerCase().includes(value.toLocaleLowerCase())) : this.fixedList[path]
    this.filteredResults[path] = items.length
    return items
  }

  unsubscribe () {
    this.subscription.forEach(sub => {if (sub != undefined) sub.unsubscribe()})
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
