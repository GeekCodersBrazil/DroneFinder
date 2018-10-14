import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';

import { TitleBarComponent } from './title-bar/title-bar.component';
import { ArrayContainerComponent } from './array-container/array-container.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [
    TitleBarComponent,
    ArrayContainerComponent
  ],
  exports: [
    TitleBarComponent,
    ArrayContainerComponent
  ]
})
export class SharedModule { }
