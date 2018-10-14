import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  readonly path: string = 'categories'

  categoryList: string[]

  constructor(private firestore: AngularFirestore) {
    this.fetchData()
  }

  fetchData() {
    this.firestore.collection(this.path).snapshotChanges().subscribe(item => {
      this.categoryList = []
      item.forEach(element => {
        var dataPayload = element.payload.doc.data()
        this.categoryList.push(dataPayload['name'])
      })
    })
  }

  insertCategory(category: string) {
    this.firestore.collection(this.path).add(
      {name: category}
    )
  }

}
