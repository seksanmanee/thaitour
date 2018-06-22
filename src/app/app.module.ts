import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { firebaseConfig } from '../config/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AdMobFree } from '@ionic-native/admob-free';

import { AuthenticationProvider } from '../providers/authentication/authentication';
import { ChatProvider } from '../providers/chat/chat';
import { FriendsProvider } from '../providers/friends/friends';
import { UserProvider } from '../providers/user/user';
import { ConnectionsProvider } from '../providers/connections/connections';
import { PostProvider } from '../providers/post/post';
import { UtilsProvider } from '../providers/utils/utils';
import { StorageProvider } from '../providers/utils/storage';
import { ImageProvider } from '../providers/image/image';
import { NotificationProvider } from '../providers/notification/notification';
import { SharedProvider } from '../providers/shared/shared';
import { AdmobFreeProvider } from '../providers/admob-free/admob-free';
import { FriendsLocationMapProvider } from '../providers/friends-location-map/friends-location-map';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Facebook,
    Geolocation,
    ImagePicker,
    Camera,
    Keyboard,
    Network,
    AdMobFree,
    SocialSharing,
    AuthenticationProvider,
    UtilsProvider,
    StorageProvider,
    SharedProvider,
    UserProvider,
    PostProvider,
    ConnectionsProvider,
    ChatProvider,
    FriendsProvider,
    StorageProvider,
    ImageProvider,
    NotificationProvider,
    SharedProvider,
    AdmobFreeProvider,
    FriendsLocationMapProvider
  ]
})
export class AppModule { }
