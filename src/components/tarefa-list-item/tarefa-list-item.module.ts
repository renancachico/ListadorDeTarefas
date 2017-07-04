import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TarefaListItemComponent } from './tarefa-list-item';

@NgModule({
  declarations: [
    TarefaListItemComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    TarefaListItemComponent
  ]
})
export class TarefaListItemComponentModule {}
