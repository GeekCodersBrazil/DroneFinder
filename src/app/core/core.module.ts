import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { AdminGuard } from './guard/admin.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthService,
    AdminGuard,
    UserService
  ]
})
export class CoreModule { }
