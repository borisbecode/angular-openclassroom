import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstComponent } from './first/first.component';
import { AppareilComponent } from './appareil/appareil.component';
import { EssaidivComponent } from './essaidiv/essaidiv.component';
import { appareilService } from './service/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthService } from './service/auth.service';

const appRoutes: Routes = [
  {
    path: 'appareils',
    component: AppareilViewComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '',
    component: AppareilViewComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AppareilComponent,
    EssaidivComponent,
    AuthComponent,
    AppareilViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [appareilService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
