import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-tranferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  public transferir(): void{
    console.log('Solitado com sucesso');
    const valorEmitir = { valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  public limparCampos(): void{
    this.valor = null;
    this.destino = null;
  }
}
