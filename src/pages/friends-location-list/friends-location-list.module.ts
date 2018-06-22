import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsLocationListPage } from './friends-location-list';

@NgModule({
  declarations: [
    FriendsLocationListPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendsLocationListPage),
  ],
})
export class FriendsLocationListPageModule {}
