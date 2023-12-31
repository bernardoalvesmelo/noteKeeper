import { Component } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';


@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent {
  categoria: Categoria;

  constructor(
      private categoriaService: CategoriaService,
      private router: Router,
      private toastService: ToastrService
      ) 
      {
          this.categoria = {
              id: 0,
              titulo: 'Padrão',
          }
      }

  criarCategoria(categoria: Categoria) {
      this.categoriaService.criarCategoria(categoria).subscribe((c) => {
          this.toastService
          .success(`Categoria ${c.titulo} criada com sucesso`, 'Success');
          
          this.router.navigate(['/categorias', 'listar']);
      });
  }
}
