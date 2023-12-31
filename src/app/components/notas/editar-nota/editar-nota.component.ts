import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../../services/nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../../../models/nota';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../../../services/categoria.service';
import { Categoria } from 'src/app/models/categoria';
import { NotaArquivadaService } from 'src/app/services/nota-arquivada.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {
  nota: Nota;
  categorias: Categoria[] = [];
  tipo: string = "nota";

  constructor(
    private notaService: NotaService,
    private notaArquivadaService: NotaArquivadaService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService
  ) {
    this.nota = {
      id: 0,
      titulo: 'Padrão',
      conteudo: 'Conteúdo Padrão',
      tema: 'dark',
      categoriaId: 0,
    }
  }

  ngOnInit(): void {
    this.tipo = this.route.snapshot.paramMap.get('tipo')!;

    if (this.tipo == 'nota') {
      this.notaService.selecionarPorId(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((n) => {
        this.nota = n;
      });
    }

    else {
      this.notaArquivadaService.selecionarPorId(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((n) => {
        this.nota = n;
      });
    }

    this.categoriaService.selecionarTodos().subscribe((categoriasLista) => {
      this.categorias = categoriasLista;
    })
  }

  editarNota(nota: Nota) {
    if (this.tipo == 'nota') {

      this.notaService.editarNota(nota).subscribe((n) => {
        this.toastService.success(`Nota ${n.titulo} editada com sucesso`, 'Success');
        this.router.navigate(['/notas', 'listar']);
      });
    }

    else {
      this.notaArquivadaService.editarNota(nota).subscribe((n) => {
        this.toastService.success(`Nota ${n.titulo} editada com sucesso`, 'Success');
        this.router.navigate(['/notas', 'listar-arquivadas']);
      });
    }
  }


}
