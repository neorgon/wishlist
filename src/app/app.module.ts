import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListsModule } from './lists/lists.module';
import { HomepageComponent } from './homepage/homepage.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    ListsModule,
    HttpClientModule,
    NgbAlertModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([
      { path: '', component:AppComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
