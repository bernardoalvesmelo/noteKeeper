import { Component, OnInit } from '@angular/core';
import { NotaService } from '../nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../nota';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit{
  nota: Nota;
  categorias: Categoria[] = [];

    constructor(
        private notaService: NotaService,
        private categoriaService: CategoriaService,
        private route: ActivatedRoute,
        private router: Router,
        private toastService: ToastrService
        ) 
        {
            this.nota = {
                id: 0,
                titulo: 'Padrão',
                conteudo: 'Conteúdo Padrão',
                tema: 'dark',
                categoriaId: 1,
            }
        }

  ngOnInit(): void {
    this.notaService.selecionarPorId(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((n) => {
      this.nota = n;
     });
     this.categoriaService.selecionarTodos().subscribe((categoriasLista) => {
      this.categorias = categoriasLista;
  })
  }

  editarNota() {
    this.notaService.editarNota(this.nota).subscribe((nota) => {
    this.toastService.success(`Nota ${nota.titulo} editada com sucesso`, 'Success');
    this.router.navigate(['/notas', 'listar']);
    });
  }
}
