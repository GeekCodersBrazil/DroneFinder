// Core imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'; // Realtime database
import { AngularFirestoreModule } from '@angular/fire/firestore'; // Firestore database
import { AngularFireAuthModule } from '@angular/fire/auth'; // Firebase Authentication

// Angular Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

// App imports
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

// Modules
import { ServiceModule } from './shared/service/service.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './/app-routing.module';

// Services
import { AuthService } from './shared/service/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,

    ServiceModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
