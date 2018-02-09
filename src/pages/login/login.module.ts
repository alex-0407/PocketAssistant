import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

import {AppTranslationModule} from '../../app/app.translation.module';
import {AppTranslationService} from '../../app/app.translation.service';
import { Authentication } from '../../providers/authentication';
import { IonJPushModule } from 'ionic2-jpush'
import { MyJPushService } from '../../providers/jpush/jpush.service'

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    AppTranslationModule,
    IonJPushModule
  ],
  providers: [
    AppTranslationService,
    MyJPushService,
    Authentication
  ]
})
export class LoginPageModule {}
