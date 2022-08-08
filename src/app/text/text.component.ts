import { Component, Input } from '@angular/core';
import { TextColorCapitalizeDirective } from '../shared/directives/text-color-capitalize.directive';

@Component({
  standalone: true,
  selector: 'text',
  imports: [TextColorCapitalizeDirective],
  template: ` <div appTextColorCapitalize>{{ text }}</div> `,
})
export class TextComponent {
  @Input() text = '';
}
