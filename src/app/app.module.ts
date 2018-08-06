import {DataPrivacyDisclaimerComponent} from './user-data-form/data-privacy-disclaimer.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserDataFormComponent} from './user-data-form/user-data-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {localStorageProviders} from '@ngx-pwa/local-storage';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';

const appRoutes: Routes = [
  { path: 'userdata', component: UserDataFormComponent },
  { path: 'list', component: ProductListComponent },

  { path: '',
    redirectTo: '/userdata',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserDataFormComponent,
    DataPrivacyDisclaimerComponent,
    PageNotFoundComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    localStorageProviders({prefix: 'basarapp'})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
