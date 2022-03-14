import { Component } from "@angular/core";

@Component({
    selector: 'app-nova-tranferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  valor: number = 100;
  destino: number = 200;

  public transferir(): void{
    console.log('Solitado com sucesso');
    console.log('Valor', this.valor);
    console.log('Destino', this.destino);
  }
}
