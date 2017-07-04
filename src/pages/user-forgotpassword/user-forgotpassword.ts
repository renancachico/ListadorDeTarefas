import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';
import { RegistrarPage } from '../registrar/registrar';

/**
 * Generated class for the UserForgotpasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-forgotpassword',
  templateUrl: 'user-forgotpassword.html',
})
export class UserForgotpasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserForgotpasswordPage');
  }

  dashboardPage(){ this.navCtrl.push(DashboardPage); }
  loginPage(){ this.navCtrl.push(LoginPage); }
  signupPage(){ this.navCtrl.push(RegistrarPage); }

}