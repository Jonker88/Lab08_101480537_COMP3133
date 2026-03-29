import { Component } from '@angular/core';

import { HEROES } from '../mock.heros';
import { InputFormat } from '../input-format';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';

@Component({
  selector: 'app-heros',
  imports: [RemoveSpacesPipe, InputFormat],
  templateUrl: './heros.html',
  styleUrl: './heros.css',
})
export class Heros {
  readonly heroes = HEROES;
}
