import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../../services/nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../../../models/nota';
import { ToastrService } from 'ngx-toastr';
import { NotaArquivadaService } from 'src/app/services/nota-arquivada.service';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css']
})
export class ExcluirNotaComponent implements OnInit {
  nota: Nota;
  tipo: string = 'nota';

  constructor(
    private route: ActivatedRoute,
    private notaService: NotaService,
    private notaArquivadaService: NotaArquivadaService,
    private router: Router,
    private toastService: ToastrService) {
    this.nota = { id: 0, titulo: '', conteudo: '', tema: 'dark' }
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
  }

  excluirNota() {
    if (this.tipo == 'nota') {
      this.notaService.excluirNota(this.nota).subscribe((nota) => {
        this.toastService.success(`Nota excluída com sucesso`, 'Success');
        this.router.navigate(['/notas', 'listar']);
      });
    }

    else {
      this.notaArquivadaService.excluirNota(this.nota).subscribe((nota) => {
        this.toastService.success(`Nota excluída com sucesso`, 'Success');
        this.router.navigate(['/notas', 'listar-arquivadas']);
      });
    }
  }
}
