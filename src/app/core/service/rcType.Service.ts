import { ValuableAttributeService } from './valuable-attribute-service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { ValuableAttribute } from './../model/subtypes/valuable-attribute';

@Injectable({
  providedIn: 'root',
})
export class RcTypeService implements ValuableAttributeService {

  readonly path: string = 'rcType'

  list: ValuableAttribute[]

  constructor(private firestore: AngularFirestore) {
    this.fetchData()
  }

  fetchData() {
    this.firestore.collection(this.path).snapshotChanges().subscribe(item => {
      this.list = []
      item.forEach(element => {
        var dataPayload = element.payload.doc.data()
        this.list.push(dataPayload as ValuableAttribute)
      })
    })
  }

  insertValue(value: ValuableAttribute) {
    this.firestore.collection(this.path).add({
      order: value.order,
      value: value.value
    })
  }

}
