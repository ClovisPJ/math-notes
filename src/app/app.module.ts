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
import { PropositionComponent } from './math/math-view/proposition/proposition.component';
import { SubsectionComponent } from './math/math-view/subsection/subsection.component';
import { DescriptionColorPipe, SectionComponent} from './math/math-view/section/section.component';
import { DocumentComponent } from './math/math-view/document/document.component';

@NgModule({
  declarations: [
    AppComponent,
    DefinitionComponent,
    CorollaryComponent,
    ExampleComponent,
    LemmaComponent,
    ProofComponent,
    PropositionComponent,
    SubsectionComponent,
    SectionComponent,
    DocumentComponent,
    DescriptionColorPipe
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
