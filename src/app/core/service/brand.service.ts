import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/firestore';

import { Brand } from './../model/brand.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BrandService {

  readonly path: string = 'brands'

  collection: AngularFirestoreCollection<Brand>
  observableList: Observable<Brand[]>
  totalItems: number = 0;

  constructor(private firestore: AngularFirestore) {
    this.fetchObservable()
  }

  fetchObservable() {
    this.collection = this.firestore.collection<Brand>(this.path)
    this.observableList = this.collection.snapshotChanges().pipe(
      map(items => {
        this.totalItems = items.length
        return items.map(item => {
          const data = item.payload.doc.data() as Brand
          const $id = item.payload.doc.id
          return { $id, ...data }
        })
      })
    )
  }

  insertBrand(brand: Brand) {
    let brandData = { ...brand }
    delete brandData['$id']
    this.firestore.collection(this.path).add(brandData)
  }

  updateBrand(brand: Brand) {
    return this.firestore.doc(`${this.path}/${brand.$id}`).update(
      {
        name: brand.name,
        brandImageURL: brand.brandImageURL,
        brandURL: brand.brandURL
      }
    )
  }

  deleteBrand($id: string) {
    this.firestore.doc(`${this.path}/${$id}`).delete()
  }

}
