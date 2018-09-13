// Core imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../firebase.environment';

// Angular Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

// App imports
import { AppComponent } from './app.component';
import { AnimationTestComponent } from './animation-test/animation-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationTestComponent
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
