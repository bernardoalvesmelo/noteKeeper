import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Nota } from 'src/app/models/nota';

@Component({
  selector: 'app-formulario-nota',
  templateUrl: './formulario-nota.component.html',
  styleUrls: ['./formulario-nota.component.css']
})
export class FormularioNotaComponent {
  @Input({ required: true }) nota: Nota;
  @Input({ required: true }) categorias: Categoria[] = [];
  @Output() onEnviarNota: EventEmitter<Nota>;

  constructor() {
    this.onEnviarNota = new EventEmitter();
    this.nota = {
      id: 0,
      titulo: 'Padrão',
      conteudo: 'Conteúdo Padrão',
      tema: 'dark',
      categoriaId: 0,
    }
  }

  enviarNota() {
    this.onEnviarNota.emit(this.nota);
  }

  definirCategoria(categoria: Categoria) {
    this.nota.categoria = categoria;
    this.nota.categoriaId = categoria.id;
  }
}
