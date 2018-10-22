import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FieldsetComponent } from './forms/fieldset/fieldset.component';
import { FieldsetHostDirective } from './forms/fieldset-host.directive';
import { RangeFieldsetComponent } from './forms/range-fieldset/range-fieldset.component';
import { NestedFieldsetComponent } from './forms/nested-fieldset/nested-fieldset.component';


@NgModule({
  declarations: [
    AppComponent,
    FieldsetComponent,
    FieldsetHostDirective,
    RangeFieldsetComponent,
    NestedFieldsetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
