/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents module of discover people
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscoverPeoplePage } from './discover-people';

@NgModule({
  declarations: [
    DiscoverPeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(DiscoverPeoplePage),
  ],
  exports: [
    DiscoverPeoplePage
  ]
})
export class DiscoverPeoplePageModule { }
