import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  valor1: number = 0;
  valor2: number = 0;
  operacao: string = 'soma';
  resultado: number = 0;

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.valor1 + this.valor2;
        break;
      case 'subtracao':
        this.resultado = this.valor1 - this.valor2;
        break;
      case 'multiplicacao':
        this.resultado = this.valor1 * this.valor2;
        break;
      case 'divisao':
        if (this.valor2 !== 0) {
          this.resultado = this.valor1 / this.valor2;
        } else {
          alert('Divisão por zero não é permitida');
        }
        break;
    }
  }

  limpar() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = 0;
    this.operacao = 'soma';
  }
}
