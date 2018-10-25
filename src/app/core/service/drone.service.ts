import { Injectable } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/firestore';

import { Drone } from '../model/drone.model';


@Injectable({
  providedIn: 'root',
})
export class DroneService {

  readonly path: string = 'drones'

  droneList: Drone[]

  constructor(private firestore: AngularFirestore) {
    this.fetchData()
  }

  fetchData() {
    this.firestore.collection(this.path).snapshotChanges().subscribe(item => {
      this.droneList = []
      item.forEach(element => {
        var dataPayload = element.payload.doc.data()
        dataPayload["$id"] = element.payload.doc.id
        this.droneList.push(dataPayload as Drone)
      })
    })
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
