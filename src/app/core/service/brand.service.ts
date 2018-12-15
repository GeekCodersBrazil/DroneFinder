<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
import { Observable, Subscription } from 'rxjs';
>>>>>>> parent of 5e2ad7d... Administration module ok to go
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
<<<<<<< HEAD
  totalItems: number = 0;
=======
  totalItems: number = 0
  filteredResults: number = 0
  fixedList: Brand[] = []
>>>>>>> parent of 5e2ad7d... Administration module ok to go

  constructor(private firestore: AngularFirestore) {
    this.fetchObservable()
  }

  fetchObservable() {
    this.collection = this.firestore.collection<Brand>(this.path)
    this.observableList = this.collection.snapshotChanges().pipe(
      map(items => {
        this.totalItems = items.length
        return items.map(item => {
<<<<<<< HEAD
          const data = item.payload.doc.data() as Brand
          const $id = item.payload.doc.id
          return { $id, ...data }
=======
          let data = item.payload.doc.data() as Brand
          data['$id'] = item.payload.doc.id
          this.fixedList.push(data)
          return data
>>>>>>> parent of 5e2ad7d... Administration module ok to go
        })
      })
    )
  }

<<<<<<< HEAD
=======
  filter(field: string, value: string): Brand[] {
    if (this.subscription == undefined) {
      this.subscription = this.observableList.subscribe(() => undefined)
    }
    let brands: Brand[] = (value != '') ? this.fixedList.filter(brand => brand[field].toLocaleLowerCase().includes(value.toLocaleLowerCase())) : this.fixedList
    this.filteredResults = brands.length
    return brands
  }

  unsubscribe() {
    this.subscription.unsubscribe()
  }

>>>>>>> parent of 5e2ad7d... Administration module ok to go
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
