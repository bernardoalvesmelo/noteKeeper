import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-filtro-notas',
  templateUrl: './filtro-notas.component.html',
  styleUrls: ['./filtro-notas.component.css']
})
export class FiltroNotasComponent {
  @Input({ required: true }) categorias: Categoria[] = [];

  @Output() onFiltroSelecionado: EventEmitter<Categoria | null>;

  constructor() {
    this.onFiltroSelecionado = new EventEmitter();
  }

  selecionarTodas() {
    this.onFiltroSelecionado.emit(null)
  }

  selecionarPorCategoria(categoria: Categoria) {
    this.onFiltroSelecionado.emit(categoria);
  }
}
