import {DataPrivacyDisclaimerComponent} from './user-data-form/data-privacy-disclaimer.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserDataFormComponent} from './user-data-form/user-data-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {localStorageProviders} from '@ngx-pwa/local-storage';

@NgModule({
  declarations: [
    AppComponent,
    UserDataFormComponent,
    DataPrivacyDisclaimerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    localStorageProviders({prefix: 'basarapp'})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
