import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TranslateService } from 'ng2-translate';
import { TarefasListPage } from '../pages/tarefas-list/tarefas-list';
import { LinguagemPage } from '../pages/linguagem/linguagem';
import { StatusBar } from '@ionic-native/status-bar';
import { LogoutPage } from '../pages/logout/logout';
import { DashboardPage } from '../pages/dashboard/dashboard';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = LoginPage;
  menuSections:Array<{title: string, component: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, translateService: TranslateService) {
    platform.ready().then(() => {
      localStorage.setItem('usedLanguage','pt_BR');
      translateService.setDefaultLang('pt_BR');
      translateService.use('pt_BR');
      statusBar.styleDefault();
      this.menuSections = [
        //{title : 'Dashbaord', component: DashboardPage },
        {title : 'pages.tarefas.title', component : TarefasListPage},
        {title : 'pages.linguagem.title', component : LinguagemPage},
        {title : 'pages.logout.title', component : LoginPage}
      ]
    });
  }

  navToComponent(component:any){
    this.nav.setRoot(component);
  }
}