import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private subscription: Subscription

  readonly path: string = 'categories'

  collection: AngularFirestoreCollection<string>
  fixedList: string[] = []

  constructor(private firestore: AngularFirestore) {
    this.fetchObservable()
  }

  fetchObservable() {
    this.collection = this.firestore.collection<string>(this.path, ref => ref.orderBy('name'))
    this.subscription = this.collection.snapshotChanges().subscribe(
      items => {
        this.fixedList = []
        return items.map(item => {
          const data = item.payload.doc.data()
          this.fixedList.push(data['name'])
        })
      }
    )
  }

  insertCategory(category: string) {
    this.firestore.collection(this.path).add(
      { name: category }
    )
  }

  unfilteredList() {
    if (this.fixedList == undefined)
      this.fixedList = []
    return this.fixedList
  }

  unsubscribe() {
    this.subscription.unsubscribe()
  }

}
