/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of connection,
 * All the connection methods are written in this file. 
 * Which connects directly to the Firebase database
 * File path - '../../../src/providers/connections/connections'
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { NotificationProvider } from '../notification/notification';
import { SharedProvider } from '../shared/shared';
import { FriendsProvider } from '../friends/friends';

@Injectable()

export class ConnectionsProvider {

  constructor(
    private db: AngularFireDatabase,
    private notificationProvider: NotificationProvider,
    private sharedProvider: SharedProvider,
    private friendsProvider: FriendsProvider) { }

  /**
   * --------------------------------------------------------------
   * Discover Peoples/Suggested Users
   * --------------------------------------------------------------
   * @method getDiscoverPeoples
   * 
   * @param userId      Current User ID
   * @return            Observable
   */
  getDiscoverPeoples(userId) {

    let filterUserList = [];

    const promise = new Promise((resolve, reject) => {

      this.getFollowingIds(userId).then((followingList: any) => {

        this.friendsProvider.getReceivedFriendRequestList(userId).then((receivedFriendReq: any) => {

          this.friendsProvider.getSendFriendRequestList(userId).then((sendFriendLists: any) => {

            this.sharedProvider.getUserFriendIds(userId).then((friendList: any) => {

              this.sharedProvider.getRecentUserListById(userId).then((recentUserList: any) => {

                filterUserList = recentUserList;

                if (followingList) {
                  filterUserList = filterUserList.filter(e => !followingList.find(a => e.uid == a));
                }

                if (receivedFriendReq) {
                  filterUserList = filterUserList.filter(e => !receivedFriendReq.find(a => e.uid == a));
                }

                if (sendFriendLists) {
                  filterUserList = filterUserList.filter(e => !sendFriendLists.find(a => e.uid == a));
                }

                if (friendList) {
                  filterUserList = filterUserList.filter(e => !friendList.find(a => e.uid == a));
                }
                resolve(filterUserList);
              });
            });
          });
        });
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Follow User
   * --------------------------------------------------------------
   * @method followUser
   * 
   * This function will process the current user will follow to any target user.
   * 
   * @param targetUserId      Any User ID - Current User Will Follow Target User
   * @param currentUserId     Current User ID
   */
  async followUser(targetUserId, currentUserId) {

    // By calling shared provider `addUserInFollowingList` method,
    // Add target user's inside the current user following list.
    await this.sharedProvider.addUserInFollowingList(currentUserId, targetUserId);

    // By calling shared provider `addUserInFollowerList` method,
    // Add current user's inside the target user followers list.
    await this.sharedProvider.addUserInFollowerList(currentUserId, targetUserId);

    // By calling shared provider `increaseUserFollowingCount` method,
    // Increase current user's following count
    await this.sharedProvider.increaseUserFollowingCount(currentUserId);

    // By calling shared provider `increaseUserFollowersCount` method,
    // Increase target user's followers count
    await this.sharedProvider.increaseUserFollowersCount(targetUserId);

    // Call notification provider `createNotification` method
    // to create a notification of following user
    this.notificationProvider.createNotification(currentUserId, targetUserId, 'following');

    return new Observable(observer => {
      observer.next('success');
      observer.complete();
    });
  }

  /**
   * --------------------------------------------------------------
   * Retrieve User Following ID's
   * --------------------------------------------------------------
   * @method getFollowingIds
   * 
   * This function will load the user's Following ID's from the database.
   * 
   * @param uid     User ID
   */
  getFollowingIds(uid) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/following/${uid}`).on('value', snapshot => {
        if (snapshot.exists()) {
          resolve(Object.keys(snapshot.val()));
        } else {
          resolve(null);
        }
      });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Retrieve User Followers ID's
   * --------------------------------------------------------------
   * @method getFollowersIds
   * 
   * This function will load the user's Followers ID's from the database.
   * 
   * @param uid     User ID
   */
  getFollowersIds(uid) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/followers/${uid}`).on('value', snapshot => {
        if (snapshot.exists()) {
          resolve(Object.keys(snapshot.val()));
        } else {
          resolve(null);
        }
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Retrieve Following User's
   * --------------------------------------------------------------
   * @method getFollowingUsers
   * @param uid     User ID
   */
  getFollowingUsers(uid) {

    let users: any = [];
    let count = 0;

    let promise = new Promise((resolve, reject) => {
      // Call `getFollowingIds` by current user ID and returning value will give
      // list of following user's ID.
      this.getFollowingIds(uid).then((following: any) => {
        if (following) {
          if (following.length > 0) {
            following.forEach(element => {
              // Call shared provider `getUserInfoByUserId` method by user ID
              // and this method return particular user details information.
              this.sharedProvider.getUserInfoByUserId(element).then((data) => {
                count++;
                users.push(Object.assign(data, { isFollowing: true }));
                if (count === following.length) {
                  resolve(users);
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
   * Retrieve Follower User's
   * --------------------------------------------------------------
   * @method getFollowersUser
   * @param uid     User ID
   */
  getFollowersUser(uid) {
    const customObj = { isFollowing: false };
    const users: any = [];
    let count = 0;

    let promise = new Promise((resolve, reject) => {
      // Call `getFollowingIds` by current user ID and returning value will give
      // list of following user's ID.
      this.getFollowingIds(uid).then((following: any) => {
        // Call `getFollowersIds` by current user ID and returning value will give
        // list of followers user's ID.
        this.getFollowersIds(uid).then((followers: any) => {
          if (followers) {
            if (followers.length > 0) {
              followers.forEach(element => {
                // Call shared provider `getUserInfoByUserId` method by user ID
                // and this method return particular user details information.
                this.sharedProvider.getUserInfoByUserId(element).then((data) => {
                  if (following) {
                    const findFollowingUser = following.find((n) => n === element);
                    if (findFollowingUser) {
                      customObj.isFollowing = true;
                    } else {
                      customObj.isFollowing = false;
                    }
                  }
                  count++;
                  users.push(Object.assign(data, customObj));
                  if (count === followers.length) {
                    resolve(users);
                  }
                });
              });
            }
          }
          else {
            resolve(null);
          }
        });
      });
    });
    return promise;
  }
}
