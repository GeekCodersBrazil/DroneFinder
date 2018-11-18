import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Drone } from '../model/drone.model';


@Injectable({
  providedIn: 'root',
})
export class DroneService {

  private subscription: Subscription

  readonly path: string = 'drones'

  collection: AngularFirestoreCollection<Drone>
  observableList: Observable<Drone[]>
  totalItems: number = 0
  filteredResults: number = 0
  fixedList: Drone[] = []

  constructor(private firestore: AngularFirestore) {
    this.fetchObservable()
  }

  fetchObservable() {
    this.collection = this.firestore.collection<Drone>(this.path, ref => ref.orderBy('model'))
    this.observableList = this.collection.snapshotChanges().pipe(
      map(items => {
        this.totalItems = items.length
        this.fixedList = []
        return items.map(item => {
          const data: Drone = item.payload.doc.data()
          data["$id"] = item.payload.doc.id;
          this.fixedList.push(data)
          return data
        })
      })
    )
  }

  insertDrone(drone: Drone) {
    let droneData = { ...drone }
    delete droneData['$id']
    this.firestore.collection(this.path).add(droneData)
  }

  filter(field: string, value: string): Drone[] {
    if (this.subscription == undefined) {
      this.subscription = this.observableList.subscribe(() => undefined)
    }
    let drones: Drone[] = (value != '') ? this.fixedList.filter(drones => drones[field].toLocaleLowerCase().includes(value.toLocaleLowerCase())) : this.fixedList
    this.filteredResults = drones.length
    return drones
  }

  unsubscribe() {
    if (this.subscription != undefined)
      this.subscription.unsubscribe()
  }

  updateDrone(drone: Drone) {
    let droneToUpdate = {...drone}
    delete droneToUpdate['$id']
    return this.firestore.doc(`${this.path}/${drone.$id}`).update({...drone})
  }

  deleteDrone($id: string) {
    this.firestore.doc(`${this.path}/${$id}`).delete()
  }

}
