import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  readonly path: string = 'users'
  collectionUser: AngularFirestoreCollection<User>;
  observableUser: Observable<any>;

  constructor(private firestore: AngularFirestore) { 

    this.fetchData();
  }

  fetchData() {
    this.collectionUser = this.firestore.collection<User>(this.path); 
    this.observableUser = this.collectionUser.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
