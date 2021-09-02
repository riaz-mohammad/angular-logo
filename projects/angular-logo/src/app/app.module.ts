import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { LogoWordsComponent } from './logo-words/logo-words.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LogoWordsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
