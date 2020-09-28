import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AnimationWithReactiveFormComponent } from './animation-with-reactive-form/animation-with-reactive-form.component';
import { ShowHideComponentComponent } from './show-hide-component/show-hide-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, AnimationWithReactiveFormComponent, ShowHideComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
