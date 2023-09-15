import { Component } from '@angular/core';
import { Categoria } from '../categoria';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {
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

  editarCategoria() {
    this.categoriaService.editarCategoria(this.categoria).subscribe((categoria) => {
    this.toastService.success(`Categoria ${categoria.titulo} editada com sucesso`, 'Success');
    this.router.navigate(['/categorias', 'listar']);
    });
  }
}
