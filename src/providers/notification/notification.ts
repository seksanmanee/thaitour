/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of notification,
 * All the notification related methods are written in this file. 
 * Which connects directly to the Firebase database.
 * File path - '../../../src/providers/notification/notification'
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { NotificationModel } from '../../models/notification';
import { SharedProvider } from '../shared/shared';

@Injectable()
export class NotificationProvider {

  // Model of notification
  private _notiModel = {} as NotificationModel;
  dbRef: any;

  constructor(private db: AngularFireDatabase,
    private sharedProvider: SharedProvider) {
    this.dbRef = this.db.database.ref();
  }

  /**
   * --------------------------------------------------------------
   * Create Notification
   * --------------------------------------------------------------
   * @method createNotification
   * This function create new notification when a user likes, comments or follow
   * to another user. Then the user of the opposite will get a notification.
   * 
   * @param sender          Sender User ID
   * @param receiver        Receiver User ID
   * @param type            Type of Notification
   * @param postkey         Post Unique Key
   */
  createNotification(sender, receiver, type, postkey?) {
    const fannedOutData = {};
    this._notiModel.key = this.db.database.ref().push().key; // Generate New Notification Key
    this._notiModel.sender = sender;
    this._notiModel.receiver = receiver;
    this._notiModel.type = type;
    this._notiModel.status = 'unread';
    this._notiModel.timestamp = new Date().getTime();
    if (postkey) {
      this._notiModel.postkey = postkey;
    }
    let promise = new Promise((resolve, reject) => {

      // Update notification based on generated new notification key number `this._notiModel.key`
      fannedOutData[`/notification/${this._notiModel.receiver}/${this._notiModel.key}`] = this._notiModel;
      this.dbRef.ref.update(fannedOutData);

      // Call `increaseTotalCount` function to increase total notification count number.
      this.increaseTotalCount(this._notiModel.receiver);

      resolve('success');
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Increase Notification
   * --------------------------------------------------------------
   * @method increaseTotalCount
   * 
   * This function increase particular user total notification count at
   * `notification/{userId}` location database.
   * @param userId
   */
  increaseTotalCount(userId) {
    this.db.database.ref(`/notification/${userId}`).child(`total`)
      .transaction(function (current) {
        return current = (current || 0) + 1;
      });
  }

  /**
   * --------------------------------------------------------------
   * Retrieve Total Unread Notification
   * --------------------------------------------------------------
   * @method totalUnreadNotification
   * @param userId      Current user ID
   * @return observer   Return total number of user unread notification
   */
  totalUnreadNotification(userId) {
    return Observable.create(observer => {
      this.db.object(`/notification/${userId}/total`).valueChanges()
        .subscribe((data: any) => {
          observer.next(data);
        }, (err) => {
          observer.error(err);
        });
    });
  }

  /**
   * --------------------------------------------------------------
   * Retrieve Total Friend Request
   * --------------------------------------------------------------
   * @param userId      Current user ID
   * @return observer   Return total number of user pending friend request
   */
  totalFriendRequest(userId) {
    return Observable.create(observer => {
      this.db.list(`/friend-request/received/${userId}`).valueChanges()
        .subscribe((data: any) => {
          observer.next(data.length);
        }, (err) => {
          observer.error(err);
        });
    });
  }

  /**
   * --------------------------------------------------------------
   * Make Total Unread Notification Zero
   * --------------------------------------------------------------
   * @method makeTotalNotificationZero
   * This function make total notification will be zero, In the Database user
   * notification locations
   * 
   * @param userId    Current User Id
   */
  makeTotalNotificationZero(userId) {
    return Observable.create(observer => {
      this.db.database.ref(`/notification/${userId}/total`).set(0).then(() => {
        observer.next();
      }).catch(err => {
        observer.error(err);
      });
    });
  }

  /**
   * --------------------------------------------------------------
   * Retrieve Notifications
   * --------------------------------------------------------------
   * @method getNotificationById
   * 
   * This method query inside `notification` location of database and retrieve user
   * list of notification. And also call `this.sharedProvider.getUserInfoByUserId` this
   * method to get user information for each notification, make a new array list of
   * notification with user information called this by `newNotificationList`.
   * 
   * @param uid       Current user Id
   * @param lastkey   Last key of Notification
   * @return promise { Resolved promise return `array` of notification and
   * rejected promise return errors. }
   * 
   */
  getNotificationById(uid, lastkey?) {

    let queryRef;
    let notificationList, newNotificationList = [];
    let count = 0;

    let promise = new Promise((resolve, reject) => {

      if (lastkey) {
        queryRef = this.db.list(`/notification/${uid}`, ref => ref.orderByKey().limitToLast(15).endAt(lastkey));
      } else {
        queryRef = this.db.list(`/notification/${uid}`, ref => ref.orderByKey().limitToLast(5));
      }

      queryRef.valueChanges().subscribe((list: any) => {
        notificationList = list.filter((n) => n.hasOwnProperty('key'));
        notificationList.forEach(element => {
          this.sharedProvider.getUserInfoByUserId(element.sender)
            .then((user: any) => {
              count++; // Increase count
              newNotificationList.push(Object.assign(element, { userName: user.name, userImage: user.image }));
              if (count === list.length) {
                resolve(newNotificationList);
              }
            })
            .catch(err => {
              reject(err);
            })
        });
      }, error => {
        reject(error);
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Make Unread Notification To Read
   * --------------------------------------------------------------
   * @method readNotification
   * 
   * This function make user unread notification to read by calling specific user
   * `notification` location and update unread status to read.
   * @param uid User Id
   * @param key  Notification unique key
   */
  readNotification(uid, key) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/notification/${uid}/${key}`).update({ status: 'read' })
        .then(() => {
          resolve('success');
        }).catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
}
