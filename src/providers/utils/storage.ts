/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of Shared.
 * File path - '../../../src/providers/utils/storage'
 */

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  constructor(
    private storage: Storage) {
  }

  set(uid, name, email, image) {
    let promise = new Promise((resolve, reject) => {
      var object = { userId: uid, name: name, email: email, image: image };
      this.storage.set('userInfo', JSON.stringify(object));
      resolve('success');
    });
    return promise;
  }

  get() {
    let promise = new Promise((resolve, reject) => {
      this.storage.get('userInfo').then((data) => {
        resolve(JSON.parse(data));
      }).catch(err => {
        reject(err);
      })
    });
    return promise;
  };

  remove() {
    let promise = new Promise((resolve, reject) => {
      this.storage.remove('userInfo').then(() => {
        this.storage.clear();
        resolve('success');
      }).catch(err => {
        reject(err);
      });
    });
    return promise;
  }
}
