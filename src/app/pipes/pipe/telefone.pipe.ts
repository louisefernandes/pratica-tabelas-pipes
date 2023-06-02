import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(valor: string): string {
    if (valor.length === 8) {
      return valor.substring(0, 4) + '-' + valor.substring(4);
    }
    else if (valor.length === 10) {
      const ddd = valor.substring(0, 2);
      const primeiroBloco = valor.substring(2, 6);
      const segundoBloco = valor.substring(6);
      return '(' + ddd + ') ' + primeiroBloco + '-' + segundoBloco;
    }
    else if (valor.length === 11) {
      const ddd = valor.substring(0, 2);
      const primeiroBloco = valor.substring(2, 7);
      const segundoBloco = valor.substring(7);
      return '(' + ddd + ') ' + primeiroBloco + '-' + segundoBloco;
    }

    return valor;
  }

}
