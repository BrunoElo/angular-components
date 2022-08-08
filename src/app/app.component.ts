import { Component } from '@angular/core';
import { texts } from 'src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-components';
  texts: string[] = texts;
}
