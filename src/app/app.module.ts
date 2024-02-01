import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { Enfant1Component } from './components/enfant1/enfant1.component';
import { Enfant2Component } from './components/enfant2/enfant2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Enfant1Component,
    Enfant2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
