
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of friends,
 * All the friends related methods are written in this file. 
 * Which connects directly to the Firebase database.
 * File path - '../../../src/providers/friends/friends'
 */

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NotificationProvider } from '../notification/notification';
import { SharedProvider } from '../shared/shared';
import { ChatProvider } from '../chat/chat';
import { FriendsLocationMapProvider } from '../friends-location-map/friends-location-map';


@Injectable()
export class FriendsProvider {

  constructor(private db: AngularFireDatabase,
    private notificationProvider: NotificationProvider,
    private sharedProvider: SharedProvider,
    private chatProvider: ChatProvider,
    private locationProvider: FriendsLocationMapProvider) { }

  /**
   * --------------------------------------------------------------
   * Retrieve Chat Friends List
   * --------------------------------------------------------------
   * @method getChatFriends     This method will return the user's friend list
   * with the total unread chat message number of each contact.
   * @param userId              Current User ID
   * 
   */
  async getChatFriends(userId) {

    let count = 0;
    let friendList = [];

    const promise = new Promise((resolve, reject) => {

      // Call shared proider `getUserFriendIds` method to get particular user friends Id
      this.sharedProvider.getUserFriendIds(userId).then((friends: any) => {
        if (friends) {

          // Call chat provider `getChatThreadNotification` method to get all the friends of the
          // Particular user unread chat notification number.
          this.chatProvider.getChatThreadNotification(userId).then((notifications: any) => {

            friends.forEach(element => {

              const findTargetUser = notifications.find((n) => n.key === element);

              // Call shared provider `getUserInfoByUserId` method to get particular user information
              this.sharedProvider.getUserInfoByUserId(element).then((data) => {
                count++;
                if (findTargetUser) {
                  friendList.push(Object.assign(data, { unreadMsg: findTargetUser.value }));
                } else {
                  friendList.push(data);
                }
                if (count === friends.length) {
                  resolve(friendList);
                }
              });
            });
          });
        }
      })
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Retrieve List of Friends
   * --------------------------------------------------------------
   * @method getFriendList
   * @param uid   User ID
   */
  async getFriendList(uid) {

    let friendList = [];
    let count = 0;

    const promise = new Promise((resolve, reject) => {
      // By calling share provider `getUserFriendIds` method to get list of
      // friends list from firebase database
      this.sharedProvider.getUserFriendIds(uid).then((friends: any) => {
        if (friends) {
          if (friends.length > 0) {
            friends.forEach(element => {
              // Call `this.sharedProvider.getUserInfoByUserId` to get particular user
              // profile information
              this.sharedProvider.getUserInfoByUserId(element).then((data) => {
                count++;
                friendList.push(Object.assign(data, { isFriends: true }));
                if (count === friends.length) {
                  resolve(friendList);
                }
              });
            });
          }
        } else {
          resolve(null);
        }
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Add Friend Request
   * --------------------------------------------------------------
   * @method addFriendRequest   This function Send friend requests to the user and target user received
   * friend request.
   * @param senderId            Current User ID/Sender ID
   * @param receiverId          Target User ID/Receiver ID
   */
  addFriendRequest(senderId, receiverId) {
    const promise = new Promise((resolve, reject) => {

      // Call `sendFriendRequest` function to add target user into the sender friend request list.
      this.sendFriendRequest(senderId, receiverId);

      // Call `receivedFriendRequest` function to add current user into the target user friend request list.
      this.receivedFriendRequest(senderId, receiverId);

      resolve('success');
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Send Friend Request
   * --------------------------------------------------------------
   * @method sendFriendRequest  This function add target user into the sender friend request list.
   * @param senderId            Current User ID/Sender ID
   * @param receiverId          Target User ID/Receiver ID
   */
  sendFriendRequest(senderId, receiverId) {
    const promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/friend-request/send/${senderId}`).child(receiverId).set(true)
        .then((success: any) => {
          resolve('success');
        });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Receive Friend Request
   * --------------------------------------------------------------
   * @method receivedFriendRequest  This function add current user into the target user friend request list.
   * @param senderId                Current User ID/Sender ID
   * @param receiverId              Target User ID/Receiver ID
   */
  receivedFriendRequest(senderId, receiverId) {
    const promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/friend-request/received/${receiverId}`).child(senderId).set(true)
        .then((success: any) => {
          resolve('success');
        });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Retrieve List of Friend Request
   * --------------------------------------------------------------
   * @method  getFriendRequestList
   * @param   currentUserId     User ID
   * @return  Promise           Return List of Friend Request
   */
  async getFriendRequestList(currentUserId) {
    const newFrndReqList = [];
    let count = 0;

    const promise = new Promise((resolve, reject) => {
      // By calling `this.getReceivedFriendRequestList` function to get list of
      // received friend request list from firebase database
      this.getReceivedFriendRequestList(currentUserId).then((frndReqList: any) => {
        if (frndReqList) {
          if (frndReqList.length > 0) {
            frndReqList.forEach(element => {
              // Call `this.sharedProvider.getUserInfoByUserId` to get particular user
              // profile information
              this.sharedProvider.getUserInfoByUserId(element).then(data => {
                count++;
                newFrndReqList.push(Object.assign(data));
                if (count === frndReqList.length) {
                  resolve(newFrndReqList);
                }
              });
            });
          }
        }
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Confirm Friend Request
   * --------------------------------------------------------------
   * @method confirmFriendRequest
   * This function works to accept/confirm the friend request. To be a friend,
   * it must be added to the current and target user's following list with increase
   * user's following count. In the same way, add user's followers list with increase
   * user's followers count. To remove user from friend request list. User's have to
   * add their friend list. Create one following notification. And Friend Location
   * will be added to both user's Locations.
   * 
   * @param targetUserId    Target user Id or who friend request sent
   * @param currentUserId   Current userId or who received friend request
   * @return promise
   */
  confirmFriendRequest(targetUserId, currentUserId) {

    const promise = new Promise((resolve, reject) => {

      // By calling `this.sharedProvider.addUserInFollowingList` method twice,
      // Add current and target user's into their following list.
      this.sharedProvider.addUserInFollowingList(currentUserId, targetUserId);
      this.sharedProvider.addUserInFollowingList(targetUserId, currentUserId);
      // By calling `this.sharedProvider.increaseUserFollowingCount` method twice,
      // Increase current and target user's following count
      this.sharedProvider.increaseUserFollowingCount(currentUserId);
      this.sharedProvider.increaseUserFollowingCount(targetUserId);

      // By calling `this.sharedProvider.addUserInFollowerList` method twice,
      // Add current and target user's into their followers list.
      this.sharedProvider.addUserInFollowerList(targetUserId, currentUserId);
      this.sharedProvider.addUserInFollowerList(currentUserId, targetUserId);
      // By calling `this.sharedProvider.increaseUserFollowersCount` method twice,
      // Increase current and target user's followers count
      this.sharedProvider.increaseUserFollowersCount(targetUserId);
      this.sharedProvider.increaseUserFollowersCount(currentUserId);

      // Call `cancelFriendRequest` function to remove user from friend request list
      this.cancelFriendRequest(targetUserId, currentUserId);

      // Call `addInFriendList` function twice, To add user's in friend list
      this.addInFriendList(currentUserId, targetUserId);
      this.addInFriendList(targetUserId, currentUserId);

      // Call `this.notificationProvider.createNotification` method to create 
      // following user notification
      this.notificationProvider.createNotification(currentUserId, targetUserId, 'following');

      // Call `this.locationProvider.addFriendLocationById` method to add
      // both user's friend location
      this.locationProvider.addFriendLocationById(currentUserId, targetUserId);

      // Resolve promise
      resolve('success');
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Unfriend or Remove User From Friend List
   * --------------------------------------------------------------
   * @method unFriend         This function will exclude the user from the user friend list and unfriend user.
   * @param currentUserId     Current User Id
   * @param targetUserId      Target User Id
   * 
   */
  unFriend(currentUserId, targetUserId) {
    const promise = new Promise((resolve, reject) => {
      // Call shared provider `unfollowUser` method twice,
      // To remove user's from the user following list
      this.sharedProvider.unfollowUser(currentUserId, targetUserId);
      this.sharedProvider.unfollowUser(targetUserId, currentUserId);

      // Call `removeUserFromFriendList` function twice,
      // To remove user's from the user friend list
      this.removeUserFromFriendList(currentUserId, targetUserId);
      this.removeUserFromFriendList(targetUserId, currentUserId);

      // Call shared provider `removeNewsfeedPost` method twice,
      // To remove newsfeed posts from users newsfeed
      this.sharedProvider.removeNewsfeedPost(currentUserId, targetUserId);
      this.sharedProvider.removeNewsfeedPost(targetUserId, currentUserId);

      // Resolve promise
      resolve('Success');
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Add In Friend List
   * --------------------------------------------------------------
   * @param userId1 Any user ID
   * @param userId2 Any user ID
   */
  addInFriendList(userId1, userId2) {
    const promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/users/${userId1}/friends`).child(userId2).set(true)
        .then((success: any) => {
          resolve('success');
        });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Remove Someone From Friend List
   * --------------------------------------------------------------
   * @method removeUserFromFriendList   This function remove target user from current user
   * friend list.
   * @param userId1   Current User ID
   * @param userId2   Target User ID 
   */
  removeUserFromFriendList(userId1, userId2) {
    const promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/users/${userId1}/friends`).child(userId2).remove()
        .then(() => {
          resolve('Removed');
        });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Cancel/Decline Friend Request
   * --------------------------------------------------------------
   * @method cancelFriendRequest
   * This function works to Cancel/Decline the friend request. To cancel user
   * friend request call `removeReceivedFriendRequest` function to remove friend
   * request from receiver list and call `removeSendFriendRequest` function to
   * remove friend request from sender list.
   * 
   * @param userId1   Target User ID
   * @param userId2   Current User ID
   */
  cancelFriendRequest(userId1, userId2) {

    let promise = new Promise((resolve, reject) => {
      // Remove friend request from receiver list
      this.removeReceivedFriendRequest(userId1, userId2);

      // Remove friend request from sender list
      this.removeSendFriendRequest(userId1, userId2);

      // Resolve promise
      resolve('Success');
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Remove user from received friend request list
   * --------------------------------------------------------------
   * @param userId1
   * @param userId2
   */
  removeReceivedFriendRequest(userId1, userId2) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/friend-request/received/${userId2}`).child(userId1).remove()
        .then(() => {
          resolve('Removed');
        });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Remove user from send friend request list
   * --------------------------------------------------------------
   * @param userId1
   * @param userId2
   */
  removeSendFriendRequest(userId1, userId2) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/friend-request/send/${userId1}`).child(userId2).remove()
        .then(() => {
          resolve('Removed');
        });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Get Received List of Friend Request
   * --------------------------------------------------------------
   * @method getReceivedFriendRequestList
   * This function queries inside the database location at `friend-request/received`
   * and populate particular user received friend request list.
   * 
   * @param userId
   * 
   */
  getReceivedFriendRequestList(userId) {
    const promise = new Promise((resolve, reject) => {
      let ref = this.db.database.ref(`/friend-request/received/${userId}`);
      ref.on('value', (snapshot) => {
        if (snapshot.exists()) {
          resolve(Object.keys(snapshot.val()));
        } else {
          resolve(null)
        }
      });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Get User Send friend request list
   * --------------------------------------------------------------
   * @method getSendFriendRequestList
   * This function query inside the location of database `friend-request/send`
   * and populate particular user send friend request list.
   * 
   * @param userId
   * 
   */
  getSendFriendRequestList(userId) {
    const promise = new Promise((resolve, reject) => {
      let ref = this.db.database.ref(`/friend-request/send/${userId}`);
      ref.on('value', (snapshot) => {
        if (snapshot.exists()) {
          resolve(Object.keys(snapshot.val()));
        } else {
          resolve(null)
        }
      });
    });
    return promise;
  };
}
