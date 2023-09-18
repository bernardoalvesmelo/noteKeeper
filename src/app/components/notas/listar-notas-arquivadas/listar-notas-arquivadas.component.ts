import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { Nota } from 'src/app/models/nota';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NotaArquivadaService } from 'src/app/services/nota-arquivada.service';


@Component({
  selector: 'app-listar-notas-arquivadas',
  templateUrl: './listar-notas-arquivadas.component.html',
  styleUrls: ['./listar-notas-arquivadas.component.css']
})
export class ListarNotasArquivadasComponent {
  notas: Nota[] = [];

  categorias: Categoria[] = [];

  constructor(
    private notaService: NotaArquivadaService,
    private categoriaService: CategoriaService,
    private toastService: ToastrService) {

  }

  ngOnInit(): void {
    this.notaService.selecionarTodosComCategoria().subscribe((notasLista) => {
      this.notas = notasLista;
    });

    this.categoriaService.selecionarTodos().subscribe((categoriasLista) => {
      this.categorias = categoriasLista;
    });
  }


  filtrarNotasPorCategoria(categoria: Categoria | null) {
    if (!categoria) {
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
    this.notaService.selecionarTodosComCategoria().subscribe((notasLista) => {
      this.notas = notasLista;
    });
  }

  desarquivarNota(nota: Nota) {
    this.notaService.desarquivarNota(nota).subscribe(() => {
      this.notaService.excluirNota(nota).subscribe(() => {
        this.selecionarTodasNotas();
        this.toastService.success(`Nota desarquivada com sucesso`, 'Success');
      })
    });
  }

}
