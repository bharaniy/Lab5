import { Component, OnInit } from '@angular/core';
import {User} from '../../Models/user';
import {AngularFireAuth} from 'angularfire2/auth';
import {NavController, NavParams, AlertController} from '@ionic/angular';
import {HomePage} from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseauth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  create(user: User) {
    try {
      // tslint:disable-next-line:only-arrow-functions
      this.firebaseauth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function() {
        alert('Created successfully, Now Login');
        user.email = '';
        user.password = '';
      }).catch(() => {
        alert('invalid email/password should be of 6 characters');
      });
    } catch (e) {
      console.error(e);
    }
  }

  login(user: User) {
    try {
      this.firebaseauth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
        this.navCtrl.navigateForward('HomePage');
      }).catch(() => {
        alert('Try again. Invalid Credentials');
      });
    } catch (e) {
      console.error(e);
    }
  }
}
