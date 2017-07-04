import { Component } from '@angular/core';
import {App, IonicPage,  NavController,  NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  logout(){
    //clear any cached data
    this.navCtrl.push(LoginPage);
  }
}