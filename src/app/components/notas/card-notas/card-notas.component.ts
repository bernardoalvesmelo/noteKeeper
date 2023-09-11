import { Component, Input } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-card-nota',
  templateUrl: './card-notas.component.html',
  styleUrls: ['./card-notas.component.css']
})
export class CardNotasComponent {
  @Input() nota: Nota = {
    id: 0,
    titulo: 'Tarefa Padrão',
    conteudo: 'Padrão de tarefa',
    tema: 'dark',
  };
}
