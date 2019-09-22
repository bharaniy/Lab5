import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NavController} from '@ionic/angular';
import {from} from 'rxjs';

const config = {
  apiKey: 'AIzaSyA-mGOVDTQOdIhytoR_Ivfa4uVw7UZyIQg',
  authDomain: 'lab5-65527.firebaseapp.com',
  databaseURL: 'https://lab5-65527.firebaseio.com',
  projectId: 'lab5-65527',
  storageBucket: '',
  messagingSenderId: '600515433238',
  appId: '1:600515433238:web:aefdc26205aab188fd7637'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuth,
      NavController,
      Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
