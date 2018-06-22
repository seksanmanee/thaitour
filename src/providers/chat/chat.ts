/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of chat,
 * All the chat methods are written in this file. 
 * Which connects directly to the Firebase database
 * File path - '../../../src/providers/chat/chat'
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { SharedProvider } from '../shared/shared';

@Injectable()
export class ChatProvider {

  constructor(
    private db: AngularFireDatabase,
    private sharedProvider: SharedProvider) { }

  /**
   * -----------------------------------------------------------
   * Get User Chat Reference
   * -----------------------------------------------------------
   * @method getChatRef     This method find out link of chat reference,
   * and send it to component where two user's can chat based on this link.
   * 
   * @param userId          Current User ID
   * @param partnerId       PartnerId
   */
  getChatRef(userId, partnerId) {
    let promise = new Promise((resolve, reject) => {
      let ref1 = this.db.object(`/chats/${userId},${partnerId}`).snapshotChanges();
      ref1.subscribe(snapshot => {
        const a = snapshot.payload.val();
        if (a) {
          resolve(`${userId},${partnerId}`);
        } else {
          let ref2 = this.db.object(`/chats/${partnerId},${userId}`).snapshotChanges();
          ref2.subscribe(snapshot => {
            const b = snapshot.payload.val()
            if (!b) {
              this.updateChatHistory(userId, partnerId);
            }
          });
          resolve(`${partnerId},${userId}`);
        }
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Update Last Time of Two Users Chat History
   * --------------------------------------------------------------
   * @method updateChatHistory
   * @param userId      Current User ID
   * @param partnerId   Partner ID
   */
  updateChatHistory(userId, partnerId) {
    // First User
    let user1 = this.db.object(`/chat-history/${userId}/${partnerId}`);
    user1.set(new Date().getTime());
    // Second User
    let user2 = this.db.object(`/chat-history/${partnerId}/${userId}`);
    user2.set(new Date().getTime());
  }

  /**
   * --------------------------------------------------------------
   * Increase Chat Notification
   * --------------------------------------------------------------
   * @param partnerId         Partner ID
   * @param userId            Current User ID
   */
  increaseNotification(partnerId, userId) {
    let ref1 = this.db.database.ref(`/chat-notification/${partnerId}/`).child(`${userId}`);
    ref1.once('value', snapshot => {
      ref1.transaction(function (current) {
        return current = (current || 0) + 1;
      });
    });
  }

  /**
   * --------------------------------------------------------------
   * Total Unread Chat Thread
   * --------------------------------------------------------------
   * @param userId  Current user Id
   * @return Observable
   */
  totalUnreadChat(userId) {
    return Observable.create(observer => {
      this.db.list(`/chat-notification/${userId}/`).valueChanges().subscribe((data: any) => {
        let totalUnread = data.filter((n) => n !== 0);
        observer.next(totalUnread.length);
      }, function (error) {
        observer.error(error);
      });
    });
  }

  /**
   * --------------------------------------------------------------
   * Read Chat Messages
   * --------------------------------------------------------------
   * @param userId 
   * @param partnerId 
   */
  readChatMsg(userId, partnerId) {
    this.db.database.ref(`/chat-notification/${userId}/`).child(`${partnerId}`).set(0);
  }

  /**
   * --------------------------------------------------------------
   * Retrieve Chat Hostory
   * --------------------------------------------------------------
   * @method getChatHistoryList
   * @param       userId      User ID
   * @return      Promise 
   */
  getChatHistoryList(userId) {

    // Initial count
    let count = 0;

    // Make a new array list of user chat history
    const chatHistoryList: any = [];

    let promise = new Promise((resolve, reject) => {

      // Get list of user chat hostory by calling `getChatHistories` function.
      this.getChatHistories(userId).then((users: any) => {

        // Get list of chat thread notification by calling `getChatThreadNotification` function.
        this.getChatThreadNotification(userId).then((notifications: any) => {
          users.forEach(eachUser => {
            const findTargetUser = notifications.find((n) => n.key === eachUser.key);

            // Get user details information
            this.sharedProvider.getUserInfoByUserId(eachUser.key).then(user => {
              count++;
              if (findTargetUser) {
                chatHistoryList.push(Object.assign(user, { chatLastTime: eachUser.value, unreadMsg: findTargetUser.value }));
              } else {
                chatHistoryList.push(Object.assign(user, { chatLastTime: eachUser.value }));
              }
              if (count === users.length) {
                resolve(chatHistoryList);
              }
            });
          });
        });
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Retrieve User Chat Thread Notification Number
   * --------------------------------------------------------------
   * @method getChatThreadNotification
   * @param userId  Current User ID
   */
  getChatThreadNotification(userId) {
    var list = [];
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/chat-notification/${userId}/`).on('value', (snapshot: any) => {
        if (snapshot.exists()) {
          snapshot.forEach(function (notification: any) {
            list.push({ key: notification.key, value: notification.val() });
          });
          resolve(list);
        } else {
          resolve(list);
        }
      });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Retrieve Chat User List
   * --------------------------------------------------------------
   * @method    getChatHistories  
   * @param     userId            userID
   * @return    Promise
   */
  getChatHistories(userId) {
    var list = [];
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/chat-history/${userId}`).on('value', (snapshot: any) => {
        if (snapshot.exists()) {
          snapshot.forEach(function (chatHistory: any) {
            list.push({ key: chatHistory.key, value: chatHistory.val() });
          });
          resolve(list);
        } else {
          resolve(list);
        }
      });
    });
    return promise;
  };
}
