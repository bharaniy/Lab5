import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {LoginPage} from '../login/login.page';
import { ListPage } from './list.page';
import { RegisterPage} from '../register/register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      },
      {
        path : 'login',
        component : LoginPage
      },
      {
        path : 'register',
        component: RegisterPage
      }
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
