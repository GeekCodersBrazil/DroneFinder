import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../model/user.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map, merge } from 'rxjs/operators';
import { SecurityService } from './security.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

	/**
	 * 
	 */
  	private readonly path: string = 'users';
  
	/**
	 * 
	 */
	public collectionUser: AngularFirestoreCollection<User>;
  
	/**
	 * 
	 */
	public observableUser: Observable<any>;
  
	/**
	 * 
	 */
	public subscription: any;
  
	/**
	 * 
	 */
	public defaultToggleOption: boolean = false;
  
	/**
	 * 
	 */
	public totalRecords: number = 0;

  	constructor(
		private firestore: AngularFirestore,
    	private securityService: SecurityService) {

    /*this.subscription = this.firestore.collection<User>(this.path)
    .snapshotChanges()
    .subscribe(snap =>{
    });*/

    this.fetchData("");
  }

  public fetchData(userName: string) {
    this.totalRecords = 0;

    this.collectionUser =
	this.firestore.collection<User>(this.path, ref => ref
			.orderBy('name')
            .startAt(userName)
            .endAt(userName + '\uf8ff'));

    this.observableUser = this.collectionUser.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
		  this.totalRecords++;
		  
          return { id, ...data };
        })));

  }

  public updateUser(isAdmin: boolean, idUser: string): void {

    this.collectionUser.doc(idUser).set({
      isAdmin: isAdmin
    }, { merge: true });

  }

  public addUser(name: string, email: string, photoURL: string): void {

    var newUser: User = new User;
    newUser.name = name;
    newUser.email = email;
    newUser.isAdmin = false;
    newUser.photoURL = photoURL;

    this.subscription = this.firestore.collection<User>(this.path, ref => ref.where('email', '==', email))
      .snapshotChanges()
      .subscribe(snap => {
        // New User - someone who isn't subscribed in drone finder database
        //save the user's data at database and in local storage
        if (snap.length == 0) {
          this.collectionUser.add({ ...newUser });
          this.securityService.saveUserProfile(newUser);
        }
        else {
          //get the owner of the email and store its information in local storage
          snap.map
            (a => {
              const dataUser = a.payload.doc.data() as User;
              this.securityService.saveUserProfile(dataUser);
            }

            );
        }
      });
  }

  public unsubscribe() {
    this.subscription.unsubscribe();
  }

}
