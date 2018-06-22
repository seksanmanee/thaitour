/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of Shared.
 * File path - '../../../src/providers/utils/utils'
 */

import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Injectable()
export class UtilsProvider {

  loading: any;

  constructor(private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController) {

  }

  /**
   * --------------------------------------------------------------
   * Present Loading Option
   * --------------------------------------------------------------
   */
  presentLoading() {
    this.loading = this.loadingController.create({
      content: 'Please wait..',
      spinner: 'crescent'
    })
    return this.loading.present();
  }

  /**
   * --------------------------------------------------------------
   * Hide Loading Option
   * --------------------------------------------------------------
   */
  hideLoading() {
    return this.loading.dismiss();
  }

  /**
   * --------------------------------------------------------------
   * Show Basic Alert
   * --------------------------------------------------------------
   */
  basicAlert(title, subTitle) {
    let promise = new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: subTitle,
        buttons: [
          {
            text: 'OK',
            handler: data => {
              resolve('ok')
            }
          }
        ]
      });
      alert.present()
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Show Confirm
   * --------------------------------------------------------------
   */
  showConfirm(title, message) {
    let promise = new Promise((resolve, reject) => {
      let confirm = this.alertCtrl.create({
        title: title,
        message: message,
        buttons: [
          {
            text: 'No',
            handler: () => {
              resolve('no')
            }
          },
          {
            text: 'Yes',
            handler: () => {
              resolve('yes')
            }
          }
        ]
      });
      confirm.present();
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Map InfoWindow
   * --------------------------------------------------------------
   */
  mapInfoWindow(title, message, buttons) {
    let promise = new Promise((resolve, reject) => {
      let confirm = this.alertCtrl.create({
        title: title,
        message: message,
        cssClass: 'map-info-window'
      });
      for (var i = 0; i < buttons.length; i++) {
        let btnName = buttons[i].text;
        confirm.addButton({
          text: btnName,
          handler: () => {
            resolve(btnName);
          }
        });
      }
      confirm.present();
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Present Toast
   * --------------------------------------------------------------
   */
  presentToast(message, duration, position) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  /**
   * --------------------------------------------------------------
   * Present Action Sheet
   * --------------------------------------------------------------
   */
  presentActionSheet(buttons) {
    let promise = new Promise((resolve) => {

      let actionSheet = this.actionSheetCtrl.create({
        title: 'Actions'
      });

      for (var i = 0; i < buttons.length; i++) {
        let btnName = buttons[i].text;
        let className = buttons[i].className;

        actionSheet.addButton({
          text: btnName,
          cssClass: className,
          handler: () => {
            resolve(btnName);
          }
        });
      }

      actionSheet.addButton({ text: 'Cancel', 'role': 'cancel' });

      actionSheet.present();
    });
    return promise;
  }
}
