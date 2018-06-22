import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageProvider } from '../providers/utils/storage';
import { AdmobFreeProvider } from '../providers/admob-free/admob-free';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private storageProvider: StorageProvider, private admobFree: AdmobFreeProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.isLoggedIn();

      // Show Interstitial Ad After 3 Minutes
      setTimeout(() => {
        this.prepareInterstitial();
      }, 180000);
    });
  }

  /**
   * --------------------------------------------------------------
   * Check User Is Logged In or Not
   * --------------------------------------------------------------
   */
  async isLoggedIn() {
    await this.storageProvider.get().then(success => {
      if (success) {
        this.rootPage = 'HomePage';
      } else {
        this.rootPage = 'LeadLandingPage';
      }
    }).catch(err => {
      this.rootPage = 'LeadLandingPage';
    })
  }

  /**
   * Prepare and show admob Interstitial ad
   */
  prepareInterstitial() {
    this.admobFree.prepareInterstitial();
  }
}

