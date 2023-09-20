import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Nota } from '../../../models/nota';

@Component({
  selector: 'app-card-nota',
  templateUrl: './card-notas.component.html',
  styleUrls: ['./card-notas.component.css']
})
export class CardNotasComponent {
  @Output() onNotaSelecionada: EventEmitter<Nota>;

  @Input() ehArquivada: boolean = false;

  @Input() nota: Nota;

  constructor() {
    this.onNotaSelecionada = new EventEmitter();
    this.nota = {
      id: 0,
      titulo: 'Tarefa Padrão',
      conteudo: 'Padrão de tarefa',
      tema: 'dark',
      categoriaId: 0
    };
  }

  emitirNota() {
    this.onNotaSelecionada.emit(this.nota);
  }
}
