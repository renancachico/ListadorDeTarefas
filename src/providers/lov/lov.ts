import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EstadoTarefa } from '../../model/estado-tarefa';
import { Tarefa } from '../../model/tarefa';

@Injectable()
export class LovProvider {

  getTarefaStates():Array<EstadoTarefa>{
    return [EstadoTarefa.NOVA, EstadoTarefa.EXECUTANDO, EstadoTarefa.FINALIZADA]
  }

  getTarefas(): Tarefa{
    return new Tarefa();
    
  }

}