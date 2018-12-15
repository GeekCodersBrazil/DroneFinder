import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  readonly path: string = 'categories'

  collection: AngularFirestoreCollection<string>
  observableList: Observable<string[]>

  constructor(private firestore: AngularFirestore) {
    this.fetchObservable()
  }

  fetchObservable() {
    this.collection = this.firestore.collection<string>(this.path)
    this.observableList = this.collection.snapshotChanges().pipe(
      map(items => items.map(item => {
        const data = item.payload.doc.data() as string
        return data['name']
      }))
    )
  }

  insertCategory(category: string) {
    this.firestore.collection(this.path).add(
      {name: category}
    )
  }

}
