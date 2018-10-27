// Core imports
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CategoryService } from './core/service/category.service';
import { BrandService } from './core/service/brand.service';
import { DroneService } from './core/service/drone.service';
import { ValuableAttributeService } from './core/service/valuable-attribute.Service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

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
    BrandService,
    CategoryService,
    DroneService,
    ValuableAttributeService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
