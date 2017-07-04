import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Credencial } from '../../model/credencial';
import { LoginProvider } from '../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})

export class RegistrarPage {
  credencial: Credencial;
  msgError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider, public toastCtrl: ToastController) {
    this.credencial = new Credencial();
  }

  doRegister(){
    this.msgError = '';

    if(this.credencial.email == null || this.credencial.email == ''){
      this.msgError = this.msgError + 'Email é obrigatório.\n';
    }

    if(this.credencial.senha == null || this.credencial.senha == ''){
      this.msgError = this.msgError + 'Senha é obrigatório.\n';
    }

    if(this.msgError != null && this.msgError != ''){
      this.toastCtrl.create({
        message: this.msgError,
        duration: 3000
      }).present();
    } else {
      this.loginProvider.registrarUsuario(this.credencial);
    }
  }  
}