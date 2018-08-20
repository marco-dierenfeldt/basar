import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { localStorageProviders } from '@ngx-pwa/local-storage';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { DataPrivacyDisclaimerComponent } from './components/user-data-form/data-privacy-disclaimer.component';
import { UserDataFormComponent } from './components/user-data-form/user-data-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderDataComponent } from './components/product-list/header-data/header-data.component';
import { ProductListTableComponent } from './components/product-list/product-list-table/product-list-table.component';
import { ProductEditorComponent } from './components/product-list/product-editor/product-editor.component';

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
    ProductListComponent,
    HeaderDataComponent,
    ProductListTableComponent,
    ProductEditorComponent
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
