import { Pipe, PipeTransform } from '@angular/core';
import {UtilisateurPipe} from './utilisateur.pipe';

@Pipe({
  name: 'utilisateurImpure',
  pure: false
})
export class UtilisateurImpurePipe extends UtilisateurPipe {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
