import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})
export class ExcluirCategoriaComponent {
  categoria: Categoria;

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private router: Router,
    private toastService: ToastrService) {
    this.categoria = {id: 0, titulo: '',}
  }

  ngOnInit(): void {
   this.categoriaService.selecionarPorId(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((c) => {
    this.categoria = c;
   });
  }

  excluirCategoria() {
    this.categoriaService.excluirCategoria(this.categoria).subscribe((categoria) => {
      this.toastService.success(`Categoria ${categoria.titulo} excluída com sucesso`, 'Success');
      this.router.navigate(['/categorias', 'listar']);
      });
  }
}
