import { LsWarningComponent } from './user-data-form/ls-warning.component';
import { AndroidBrowserHintComponent } from './user-data-form/android-browser-hint.component';
import { DataPrivacyDisclaimerComponent } from './user-data-form/data-privacy-disclaimer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDataFormComponent } from './user-data-form/user-data-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserDataFormComponent,
    DataPrivacyDisclaimerComponent,
    AndroidBrowserHintComponent,
    LsWarningComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
