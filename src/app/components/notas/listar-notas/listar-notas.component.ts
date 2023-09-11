import { Component } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})

export class ListarNotasComponent {
  notas: Nota[] = [
    {
      id: 1,
      titulo: 'Nota criada 1',
      conteudo: 'Nota de teste',
      tema: 'dark',
    },
    {
      id: 2,
      titulo: 'Nota criada 2',
      conteudo: 'Nota de teste',
      tema: 'warning',
    },
  ];
  
  titulo: string = "";
  conteudo: string = "";
  
  adicionarNota() {
    const tamanho = this.notas.length + 1;
    const nota: Nota = {
      id: tamanho,
      titulo: this.titulo,
      conteudo: this.conteudo,
      tema: "dark"
    }

    this.notas.push(nota);
  }
}
