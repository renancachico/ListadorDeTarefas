import { RegistrarPage } from '../registrar/registrar';
import { Component } from '@angular/core';
import { MenuController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { Credencial } from '../../model/credencial';
import { TarefasListPage } from '../tarefas-list/tarefas-list';
import { UserForgotpasswordPage } from '../user-forgotpassword/user-forgotpassword';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credencial: Credencial;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider, 
  public menuCtrl: MenuController, public toastCtrl: ToastController) {
    this.initialize();
  }

  private initialize(){
    this.credencial = new Credencial();
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.loginProvider.loginSucessoEventEmitter.subscribe(user => {
      this.menuCtrl.enable(true);
      this.menuCtrl.swipeEnable(true);
      this.navCtrl.setRoot(TarefasListPage)
    });
    
    this.loginProvider.loginFalhaEventEmitter.subscribe(error => console.log(error))
  }

  loginComFacebook(){
    this.loginProvider.loginComFacebook();
  }

  loginComCredencial(){
    if(this.credencial.email != null && this.credencial.senha != null){
      this.loginProvider.loginComCredencial(this.credencial);
    } else {
      this.toastCtrl.create({
      message: 'Login e senha é obrigatório!',
      duration: 3000
    }).present();
    }
  }

  loginComGoogle(){
    this.loginProvider.loginComGoogle();
  }

  sair(){
    this.loginProvider.sair();
  }

  doRegister(){
    this.navCtrl.push(RegistrarPage);
  }

  forgotPasswordPage(){ this.navCtrl.push(UserForgotpasswordPage); }
}