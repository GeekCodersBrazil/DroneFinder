import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../model/user.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map, merge } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly path: string = 'users'
  collectionUser: AngularFirestoreCollection<User>;
  observableUser: Observable<any>;
  subscription: any;
  defaultToggleOption: boolean = false;

  constructor(private firestore: AngularFirestore) {

    /*this.subscription = this.firestore.collection<User>(this.path)
    .snapshotChanges()
    .subscribe(snap =>{
    });*/

    this.fetchData("");
  }

  public fetchData(userName: string) 
  {

    this.collectionUser = 
    this.firestore.collection<User>(
      this.path, ref => 
      ref
      .orderBy('name')
      .startAt(userName)
      .endAt(userName + "\uf8ff")
      );

    this.observableUser = this.collectionUser
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  public updateUser(isAdmin: boolean, idUser: string) : void
  {
    
    this.collectionUser.doc(idUser).set({
      isAdmin: isAdmin
    }, {merge: true});

  }

  public addUser(name: string, email: string, photoURL: string) : void {

    this.subscription = this.firestore.collection<User>(this.path, ref => ref.where('email', '==', email))
    .snapshotChanges()
    .subscribe(snap =>{
        if (snap.length == 0)
        {
          var newUser = new User();

          newUser.name = name;
          newUser.email = email;
          newUser.isAdmin = false;
          newUser.photoURL= photoURL;

          this.collectionUser.add({...newUser});
        }
    });
   // this.subscription.unsubscribe()
  }

  
}
