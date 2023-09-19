import { Component } from "@angular/core";
import { Nota } from "../../../models/nota";
import { NotaService } from "../../../services/nota.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from "../../../services/categoria.service";
import { Categoria } from "src/app/models/categoria";


@Component({
    selector: 'app-criar-nota',
    templateUrl: './criar-nota.component.html',
    styleUrls: ['./criar-nota.component.css']
})

export class CriarNotaComponent {
    nota: Nota;
    categorias: Categoria[] = [];

    constructor(
        private notaService: NotaService,
        private categoriaService: CategoriaService,
        private router: Router,
        private toastService: ToastrService
    ) {
        this.nota = {
            id: 0,
            titulo: 'Padrão',
            conteudo: 'Conteúdo Padrão',
            tema: 'dark',
            categoriaId: 1,
        }
    }

    ngOnInit(): void {
        this.categoriaService.selecionarTodos().subscribe((categoriasLista) => {
            this.categorias = categoriasLista;
            this.verificarCategorias();
            this.nota.categoria = this.categorias[0] ?? null;
            this.nota.categoriaId = this.nota.categoria.id;
        });
    }

    criarNota(nota: Nota) {
        this.notaService.criarNota(nota).subscribe((n) => {
            this.toastService
                .success(`Nota ${n.titulo} criada com sucesso`, 'Success');

            this.router.navigate(['/notas', 'listar']);
        });
    }

    verificarCategorias() {
        if (this.categorias.length == 0) {
            this.toastService.warning(
                `Cadastre uma categoria primeiro para poder criar uma nota`,
                'Warning'
            );
            this.router.navigate(['/categorias', 'listar']);
        }
    }
}