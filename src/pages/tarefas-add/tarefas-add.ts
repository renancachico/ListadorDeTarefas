import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Tarefa } from '../../model/tarefa';
import { LovProvider } from '../../providers/lov/lov';
import { TarefaProvider } from '../../providers/tarefa/tarefa';
import { EstadoTarefa } from '../../model/estado-tarefa';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html',
})
export class TarefasAddPage {

  tarefa: Tarefa;
  tarefaForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tarefasProvider: TarefaProvider,
  public viewCtrl: ViewController, public fb: FormBuilder, public lovProvider: LovProvider, public toastCtrl: ToastController,) {
    this.initialize();
  }

  private initialize(){
    this.tarefa = this.navParams.get('tarefa');
    if(!this.tarefa){
      this.tarefa = new Tarefa();
    }

    this.tarefaForm = this.fb.group({
      'titulo': ['',Validators.compose([Validators.required, Validators.minLength(5)])],
      'descricao': [''],
      'estadoTarefa': ['',Validators.required]
    });
  }

  getEstadoValue(estadoTarefa: EstadoTarefa):string{
    return EstadoTarefa[estadoTarefa];
  }

  salvarTarefa(){
    this.tarefasProvider.save(this.tarefa);
    this.toastCtrl.create({
      message: 'Tarefa '+this.tarefa.titulo+' adicionada com sucesso!',
      duration: 3000
    }).present();

    this.viewCtrl.dismiss();
  }

  logout(){
    this.navCtrl.push(LoginPage);
  }
}