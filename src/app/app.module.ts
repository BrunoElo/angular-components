import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [AppComponent, CapitalizePipe],
  imports: [BrowserModule, TextComponent],
  providers: [CapitalizePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
