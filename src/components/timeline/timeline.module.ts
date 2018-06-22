/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents module of timeline
 */

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TimelineComponent } from './timeline';
import { MainPipeModule } from '../../pipes/main-pipe.module';

@NgModule({
  declarations: [
    TimelineComponent,
  ],
  imports: [
    MainPipeModule, IonicModule
  ],
  exports: [
    TimelineComponent
  ]
})
export class TimelineComponentModule { }
