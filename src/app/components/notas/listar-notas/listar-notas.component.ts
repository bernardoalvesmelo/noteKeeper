import { Component, OnInit } from '@angular/core';
import { Nota } from '../../../models/nota';
import { NotaService } from '../../../services/nota.service';
import { CategoriaService } from '../../../services/categoria.service';
import { Categoria } from 'src/app/models/categoria';


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


  filtrarNotasPorCategoria(categoria: Categoria | null) {
    if(!categoria) {
      this.selecionarTodasNotas();
    }

    else {
      this.selecionarNotasPorCategoria(categoria);
    }
  }

  selecionarNotasPorCategoria(categoria: Categoria) {
    this.notaService
      .selecionarTodasPorCategoria(categoria)
      .subscribe((notas: Nota[]) => {
        this.notas = notas;
      });
  }

  selecionarTodasNotas() {
    this.notaService.selecionarTodos().subscribe((notasLista) => {
      this.notas = notasLista;
    });
  }
}
