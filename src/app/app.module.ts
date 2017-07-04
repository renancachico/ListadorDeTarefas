import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import * as firebase from 'firebase';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LinguagemPage } from '../pages/linguagem/linguagem';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { LoginProvider } from '../providers/login/login';
import { LovProvider } from '../providers/lov/lov';
import { TarefaProvider } from '../providers/tarefa/tarefa';
import { TarefasListPage } from '../pages/tarefas-list/tarefas-list';
import { TarefaListItemComponent } from '../components/tarefa-list-item/tarefa-list-item';
import { TarefasAddPage } from '../pages/tarefas-add/tarefas-add';
import { LogoutPage } from '../pages/logout/logout';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { UserForgotpasswordPage } from '../pages/user-forgotpassword/user-forgotpassword';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

const firebaseConfig = {
    
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LogoutPage,
    RegistrarPage,
    LinguagemPage,
    TarefasListPage,
    TarefaListItemComponent,
    TarefasAddPage,
    DashboardPage,
    UserForgotpasswordPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    LogoutPage,
    RegistrarPage,
    LinguagemPage,
    TarefasListPage,
    TarefaListItemComponent,
    TarefasAddPage,
    DashboardPage,
    UserForgotpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    LovProvider,
    TarefaProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}