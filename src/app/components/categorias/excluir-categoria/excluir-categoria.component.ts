import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { Nota } from '../../notas/nota';
import { NotaService } from '../../notas/nota.service';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})
export class ExcluirCategoriaComponent {
  categoria: Categoria;
  notas: Nota[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private notaService: NotaService,
    private router: Router,
    private toastService: ToastrService) {
    this.categoria = {id: 0, titulo: '',}
  }

  ngOnInit(): void {
   this.categoriaService.selecionarPorId(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((c) => {
    this.categoria = c;
   });

   this.notaService.selecionarTodos().subscribe((notas) => {
    this.notas = notas;
  });
  }

  excluirCategoria() {
    const nota = this.notas.find(n => n.categoriaId == this.categoria.id);
    if(nota) {
      this.toastService.success(
        `Categoria ${this.categoria.titulo} não pode ser excluída enquanto relacionada com Nota ${nota.titulo}`, 
        'Success'
        );
      this.router.navigate(['/categorias', 'listar']);
    }

    this.categoriaService.excluirCategoria(this.categoria).subscribe((categoria) => {
      this.toastService.success(`Categoria ${categoria.titulo} excluída com sucesso`, 'Success');
      this.router.navigate(['/categorias', 'listar']);
      });
  }
}
