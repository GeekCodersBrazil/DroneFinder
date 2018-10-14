import { Injectable } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/firestore';

import { Brand } from './../model/brand.model';

@Injectable({
  providedIn: 'root',
})
export class BrandService {

  readonly path: string = 'brands'

  brandList: Brand[]

  constructor(private firestore: AngularFirestore) {
    this.fetchData()
  }

  fetchData() {
    this.firestore.collection(this.path).snapshotChanges().subscribe(item => {
      this.brandList = []
      item.forEach(element => {
        var dataPayload = element.payload.doc.data()
        dataPayload["$id"] = element.payload.doc.id
        this.brandList.push(dataPayload as Brand)
      })
    })
  }

  insertBrand(brand: Brand) {
    this.firestore.collection(this.path).add(
      {name: brand.name,
        brandImageURL: brand.brandImageURL,
        brandURL: brand.brandURL}
    )
  }

  updateBrand(brand: Brand) {
    return this.firestore.doc(`${this.path}/${brand.$id}`).update(
      {name: brand.name,
        brandImageURL: brand.brandImageURL,
        brandURL: brand.brandURL}
    )
  }

  deleteBrand($id: string) {
    this.firestore.doc(`${this.path}/${$id}`).delete()
  }

  getBrandById($id: string): Brand {
    return this.brandList.find(brand => brand.$id == $id)
  }

}
