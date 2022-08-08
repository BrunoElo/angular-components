import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'text',
  imports: [],
  template: ` <div appTextColorCapitalize>{{ text }}</div> `,
})
export class TextComponent {
  @Input() text = '';
}
