import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsLocationMapPage } from './friends-location-map';

@NgModule({
  declarations: [
    FriendsLocationMapPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendsLocationMapPage),
  ],
})
export class FriendsLocationMapPageModule {}
