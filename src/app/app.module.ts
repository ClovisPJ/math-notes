import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KatexModule } from 'ng-katex';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefinitionComponent } from './math/math-view/defintion/definition.component';
import { CorollaryComponent } from './math/math-view/corollary/corollary.component';
import { ExampleComponent } from './math/math-view/example/example.component';
import { LemmaComponent } from './math/math-view/lemma/lemma.component';
import { ProofComponent } from './math/math-view/proof/proof.component';

@NgModule({
  declarations: [
    AppComponent,
    DefinitionComponent,
    CorollaryComponent,
    ExampleComponent,
    LemmaComponent,
    ProofComponent
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
