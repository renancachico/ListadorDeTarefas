import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserForgotpasswordPage } from './user-forgotpassword';

@NgModule({
  declarations: [
    UserForgotpasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(UserForgotpasswordPage),
  ],
  exports: [
    UserForgotpasswordPage
  ]
})
export class UserForgotpasswordPageModule {}
