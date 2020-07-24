import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utilisateur'
})
export class UtilisateurPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
