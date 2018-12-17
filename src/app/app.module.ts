import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// v5.0.3
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {EventService} from './event.service';
import {MyLogHttpInterceptor} from './http.interceptor';



import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EventService,
    { provide: HTTP_INTERCEPTORS, useClass:MyLogHttpInterceptor, multi : true},
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
