import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Drone } from '../model/drone.model';


@Injectable({
  providedIn: 'root',
})
export class DroneService {

  readonly path: string = 'drones'

  collection: AngularFirestoreCollection<Drone>
  observableList: Observable<Drone[]>

  constructor(private firestore: AngularFirestore) {
    this.fetchObservable()
  }

  fetchObservable() {
    this.collection = this.firestore.collection<Drone>(this.path)
    this.observableList = this.collection.snapshotChanges().pipe(
      map(items => items.map(item => {
        const data: Drone = item.payload.doc.data()
        data["$id"] = item.payload.doc.id;
        return data
      }))
    )
  }

  insertDrone(drone: Drone) {
    let droneData = {...drone}
    delete droneData['$id']
    this.firestore.collection(this.path).add(droneData)
  }

  updateDrone(drone: Drone) {
    /*return this.firestore.doc(`${this.path}/${Drone.$id}`).update(
      {name: Drone.name,
        DroneImageURL: Drone.DroneImageURL,
        DroneURL: Drone.DroneURL}
    )*/
  }

  deleteDrone($id: string) {
    this.firestore.doc(`${this.path}/${$id}`).delete()
  }

}
