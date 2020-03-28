import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KatexModule } from 'ng-katex';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathComponent } from './math/math-view/math.component';

@NgModule({
  declarations: [
    AppComponent,
    MathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KatexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
