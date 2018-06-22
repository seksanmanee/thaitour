/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of user,
 * All the user related methods are written in this file. 
 * Which connects directly to the Firebase database.
 * File path - '../../../src/providers/user/user'
 */

import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ConnectionsProvider } from '../connections/connections';
import { FriendsProvider } from '../friends/friends';
import { StorageProvider } from '../utils/storage';
import { SharedProvider } from '../shared/shared';
import { PostProvider } from '../post/post';

@Injectable()
export class UserProvider {

  dbRef: any;

  constructor(injector: Injector,
    private db: AngularFireDatabase,
    private storageProvider: StorageProvider,
    private connectionsProvider: ConnectionsProvider,
    private friendsProvider: FriendsProvider,
    private sharedProvider: SharedProvider,
    private postProvider: PostProvider) {
    this.dbRef = this.db.database.ref();
  }

  /**
   * --------------------------------------------------------------
   * Update User Information
   * --------------------------------------------------------------
   * @method updateUserData
   * @param data    User Informations
   */
  updateUserData(data) {
    let promise = new Promise((resolve, reject) => {
      this.db.list('users').update(data.uid, data).then((success: any) => {
        resolve(success);
      }).catch((err: any) => {
        reject(err);
      });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Update User Name
   * --------------------------------------------------------------
   * @method updateUserName
   * 
   * This function update user name at user own `posts`, `newsfeed`, user followers
   * `newsfeed` and user `friends-location` inside these locations of the database where
   * user's information is exists.
   * 
   * @param data    User Data
   */
  async updateUserName(data) {
    let promise = new Promise((resolve, reject) => {
      let fannedOutData = {};

      // Update User's own Post and Newsfeed
      this.postProvider.getUserPostIDs(data.uid).then((postKeys: any) => {
        if (postKeys) {
          for (let i = 0; i < postKeys.length; i++) {
            fannedOutData['/posts/' + data.uid + '/' + postKeys[i] + '/' + 'userName'] = data.name;
            fannedOutData['/newsfeed/' + data.uid + '/' + postKeys[i] + '/' + 'userName'] = data.name;
          }
        }

        // Update User's Followers Post and Newsfeed
        this.connectionsProvider.getFollowersIds(data.uid).then((followers: any) => {
          if (followers && postKeys) {
            for (let i = 0; i < followers.length; i++) {
              for (let j = 0; j < postKeys.length; j++) {
                fannedOutData['/newsfeed/' + followers[i] + '/' + postKeys[j] + '/' + 'userName'] = data.name;
              }
            }
          }

          // Update User Friend's Location
          this.sharedProvider.getUserFriendIds(data.uid).then((friends: any) => {
            if (friends) {
              for (let i = 0; i < friends.length; i++) {
                fannedOutData['/friends-location/' + friends[i] + '/' + data.uid + '/' + 'userName'] = data.name;
              }
            }

            // Update Local Storage
            this.storageProvider.set(data.uid, data.name, data.email, data.image).then(() => {
              this.dbRef.ref.update(fannedOutData);
              resolve('success');
            }, function (error) {
              reject(error);
            });
          });
        });
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Update Profile Photo
   * --------------------------------------------------------------
   * @method updateProfileImage
   * 
   * This function update user profile photo at user onw profile `users`, user own `posts`,
   * `newsfeed`, user followers `newsfeed` and user `friends-location` inside these
   * locations of the database where user's information is exists.
   * 
   * @param data    User Data
   */
  updateProfileImage(data) {

    let promise = new Promise((resolve, reject) => {
      let fannedOutData = {};

      // Update User Own Record
      fannedOutData['/users/' + data.uid + '/' + 'image'] = data.image;

      // Update User's own Post and Newsfeed
      this.postProvider.getUserPostIDs(data.uid).then((postKeys: any) => {
        if (postKeys) {
          for (let i = 0; i < postKeys.length; i++) {
            fannedOutData['/posts/' + data.uid + '/' + postKeys[i] + '/' + 'userImage'] = data.image;
            fannedOutData['/newsfeed/' + data.uid + '/' + postKeys[i] + '/' + 'userImage'] = data.image;
          }
        }

        // Update User's Followers Post and Newsfeed
        this.connectionsProvider.getFollowersIds(data.uid).then((followers: any) => {
          if (followers && postKeys) {
            for (let i = 0; i < followers.length; i++) {
              for (let j = 0; j < postKeys.length; j++) {
                fannedOutData['/newsfeed/' + followers[i] + '/' + postKeys[j] + '/' + 'userImage'] = data.image;
              }
            }
          }

          // Update User Friend's Location
          this.sharedProvider.getUserFriendIds(data.uid).then((friends: any) => {
            if (friends) {
              for (let i = 0; i < friends.length; i++) {
                fannedOutData['/friends-location/' + friends[i] + '/' + data.uid + '/' + 'userImage'] = data.image;
              }
            }

            // Update Local Storage
            this.storageProvider.set(data.uid, data.name, data.email, data.image).then(() => {
              this.dbRef.ref.update(fannedOutData);
              resolve('success');
            }, function (error) {
              reject(error);
            });
          });
        });
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Get Target User Information
   * --------------------------------------------------------------
   * @method getTargetUserInfos
   * @param userId Particular User Id
   * @param currentUserId Current UserId
   */
  async getTargetUserInfos(userId, currentUserId) {
    const userCustomObj = {
      isFriend: false,
      isFollowing: false,
      isReceivedFrndReq: false,
      isSendFrndReq: false
    };

    // Call `this.sharedProvider.getUserInfoByUserId` to get particular user informations
    const userInfo: any = await this.sharedProvider.getUserInfoByUserId(userId);

    if (userInfo) {

      if (userInfo.friends) {
        // Retrieve current userId from friend list of `userInfo`
        const friends: any = Object.keys(userInfo.friends);
        const findFriend = friends.find((n) => n === currentUserId);
        // If current userId exist on the user's friend list
        // make `userCustomObj.isFriend` property is `true`
        if (findFriend) {
          userCustomObj.isFriend = true;
        }
      }

      // Call `this.friendsProvider.getReceivedFriendRequestList` method to retrieve user
      // received friend request list
      await this.friendsProvider.getReceivedFriendRequestList(currentUserId).then((receivedFriendReq: any) => {
        if (receivedFriendReq) {
          const findreceivedFriend = receivedFriendReq.find((n) => n === userId);
          // if current user get the friend request from the targeted user,
          // make `userCustomObj.isReceivedFrndReq` property is `true`
          if (findreceivedFriend) {
            userCustomObj.isReceivedFrndReq = true;
          }
        }
      });

      // Call `this.friendsProvider.getSendFriendRequestList` method to retrieve user
      // list of sending friend requests
      await this.friendsProvider.getSendFriendRequestList(currentUserId).then((sendFriendReq: any) => {
        if (sendFriendReq) {
          const findSendFriend = sendFriendReq.find((n) => n === userId);
          // if current user sent the friend request to targeted user,
          // make `userCustomObj.isSendFrndReq` property is `true`
          if (findSendFriend) {
            userCustomObj.isSendFrndReq = true;
          }
        }
      });

      // Call `this.connectionsProvider.getFollowingIds` method to retrieve following user's ID
      await this.connectionsProvider.getFollowingIds(currentUserId).then((following: any) => {
        if (following) {
          const findFollowingUser = following.find((n) => n === userId);
          // If current user follow to targeted user
          // make `userCustomObj.isFollowing` property is `true`
          if (findFollowingUser) {
            userCustomObj.isFollowing = true;
          }
        }
      });

      return new Observable(observer => {
        observer.next(Object.assign(userInfo, userCustomObj));
      });
    }
  }
}
