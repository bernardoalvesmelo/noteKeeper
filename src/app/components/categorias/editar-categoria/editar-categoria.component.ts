import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../../services/categoria.service';
import { Categoria } from 'src/app/models/categoria';

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
    this.categoria = {
      id: 0, 
      titulo: '',
    }
  }

  ngOnInit(): void {
    this.categoriaService.selecionarPorId(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((c) => {
      this.categoria = c;
     });
  }

  editarCategoria(categoria: Categoria) {
    this.categoriaService.editarCategoria(categoria).subscribe((c) => {
    this.toastService.success(`Categoria ${c.titulo} editada com sucesso`, 'Success');
    this.router.navigate(['/categorias', 'listar']);
    });
  }
}
