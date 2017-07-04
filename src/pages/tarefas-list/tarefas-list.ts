import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Tarefa } from '../../model/tarefa';
import { TarefaProvider } from '../../providers/tarefa/tarefa';
import { TarefasAddPage } from '../tarefas-add/tarefas-add';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html',
})
export class TarefasListPage {

  tarefas: Array<Tarefa>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tarefaProvider: TarefaProvider,
              public toastCtrl: ToastController,
              public ngZone: NgZone, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    /*
     * value - Escuta todas as alterações da referencia
     * child_added - Ouvinte para quando um filtlo for adicionado
     * child_changed - Ouvinte para quando algum filtlo for alterado
     * child_removed - Ouvinte para quando algum filho for deletado
     * child_moved - Ouvinte para ouvir as mudanças na prioridade de um filho
     */
    this.tarefaProvider.reference.on('child_removed', (snapshot) => {
      let tarefaRemovida = snapshot.val();
      this.toastCtrl.create({
        message: 'Tarefa '+tarefaRemovida.titulo+' foi removida!',
        duration: 3000
      }).present();
    })

    this.tarefaProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.tarefas = innerArray;
      })
    })
  }

  atualizarTarefa(tarefa:Tarefa){
    this.navCtrl.push(TarefasAddPage,{'tarefa' : tarefa});
  }

  adicionarTarefa(){
    this.navCtrl.push(TarefasAddPage,{'tarefa' : new Tarefa()});
  }

deletarTarefa(tarefa: Tarefa) {
    let confirm = this.alertCtrl.create({
      title: 'Deseja realmente excluir a tarefa?',
      message: '',
      buttons: [
        { text: 'Sim',
          handler: () => {
            this.tarefaProvider.deletar(tarefa);
          }
        },
        { text: 'Não',
          handler: () => { }
        }
      ]
    });
    confirm.present();
  }

  /*deletarTarefa(tarefa:Tarefa){
    this.tarefaProvider.deletar(tarefa).then(
      sucesso => console.log('Tarefa deletada.')
    )
    .catch(error => console.log('Não foi possível deletar a tarefa.'));
  }*/

  logout(){
    this.navCtrl.push(LoginPage);
  }
}