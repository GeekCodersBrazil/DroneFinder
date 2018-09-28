// Core imports
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'; // Firestore database
import { AngularFireAuthModule } from '@angular/fire/auth'; // Firebase Authentication

// Angular Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatNativeDateModule } from '@angular/material';

// App imports
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

// Modules
import { MainModule } from './main/main.module';
import { AdministrationModule } from './main/administration/administration.module';
import { AppRoutingModule } from './/app-routing.module';

// Services and Guards
import { AuthService } from './core/service/auth.service';
import { AdminGuard } from './core/guard/admin.guard';
import { BrandService } from './core/service/brand.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatNativeDateModule,

    MainModule,
    AdministrationModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthService,
    AdminGuard,
    BrandService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
