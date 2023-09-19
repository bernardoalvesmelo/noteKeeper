import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.css']
})
export class FormularioCategoriaComponent {
  @Input({ required: true}) categoria: Categoria = {id: 0, titulo: 'Padrão'}
  @Output() onEnviarCategoria: EventEmitter<Categoria>;

  constructor() {
    this.onEnviarCategoria = new EventEmitter();
  }

  enviarCategoria() {
    this.onEnviarCategoria.emit(this.categoria);
  }
}
