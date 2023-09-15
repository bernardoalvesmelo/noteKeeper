import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})

export class ListarNotasComponent implements OnInit{
  notas: Nota[] = [];

  categorias: Categoria[] = [];

    constructor(
        private notaService: NotaService,
        private categoriaService: CategoriaService,) {

  }

  ngOnInit(): void {
    this.notaService.selecionarTodos().subscribe((notasLista) => {
      this.notas = notasLista;
    });

    this.categoriaService.selecionarTodos().subscribe((categoriasLista) => {
      this.categorias = categoriasLista;
    });
  }

  filtrarPorCategorias(categoria: Categoria): void {
    this.notaService.selecionarTodos().subscribe((notasLista) => {
      this.notas = notasLista.filter(c => c.id == categoria.id);
    });
  }

  mostrarTodasNotas() {
    this.notaService.selecionarTodos().subscribe((notasLista) => {
      this.notas = notasLista;
    });
  }
}
