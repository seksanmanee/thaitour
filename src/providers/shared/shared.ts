/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of Shared.
 * File path - '../../../src/providers/shared/shared'
 */


import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SharedProvider {

  /**
   * Database reference
   */
  dbRef: any;

  constructor(private db: AngularFireDatabase) {
    this.dbRef = this.db.database.ref();
  }

  /**
   * --------------------------------------------------------------
   * Add User To User Following List
   * --------------------------------------------------------------
   * @method addUserInFollowingList
   * @param currentUserId 
   * @param targetUserId 
   */
  addUserInFollowingList(currentUserId, targetUserId) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/following/${currentUserId}`).child(targetUserId).set(true)
        .then((success: any) => {
          resolve('success');
        });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Add User To User Follower List
   * --------------------------------------------------------------
   * @method addUserInFollowerList
   * @param currentUserId 
   * @param targetUserId 
   */
  addUserInFollowerList(currentUserId, targetUserId) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/followers/${targetUserId}`).child(currentUserId).set(true)
        .then((success: any) => {
          resolve('success');
        });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Increase User Following Count
   * --------------------------------------------------------------
   */
  increaseUserFollowingCount = (userId) => {
    const databaseRef = this.db.database.ref('users').child(userId).child('totalFollowing');

    databaseRef.transaction(function (current) {

      return current = (current || 0) + 1;

    });
  }

  /**
   * --------------------------------------------------------------
   * Increase User Followers Count
   * --------------------------------------------------------------
   */
  increaseUserFollowersCount = (userId) => {
    const databaseRef = this.db.database.ref('users').child(userId).child('totalFollowers');

    databaseRef.transaction(function (current) {

      return current = (current || 0) + 1;

    });
  }

  /**
   * --------------------------------------------------------------
   * Recent User List
   * --------------------------------------------------------------
   * @method getRecentUserListById
   * This function retrieve recent user list from database.
   * 
   * @param userId    Current User ID
   */
  getRecentUserListById(userId) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/users`).limitToLast(30).orderByKey().on('value', recentUserList => {
        const values = Object.keys(recentUserList.val()).map(key => recentUserList.val()[key]).map(x => x);
        const excludeCurrentUser = values.filter((n) => n.uid !== userId);
        resolve(excludeCurrentUser);
      });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Get User Information By User ID
   * --------------------------------------------------------------
   */
  getUserInfoByUserId = (userId) => new Promise((resolve, reject) => {
    this.db.database.ref(`/users/` + userId)
      .once('value', (snapuser) => {
        if (snapuser.exists()) {
          let userInfo = snapuser.val();
          resolve(userInfo);
        }
      }).catch((err: any) => {
        reject(err);
      })
  });

  /**
   * --------------------------------------------------------------
   * Unfollow User
   * --------------------------------------------------------------
   * @method unfollowUser
   * 
   * This function unfollow someone. To unfollow someone remove target user from following
   * and followers list and decrease user following and followers count.
   * 
   * @param userId1
   * @param userId2
   */
  unfollowUser(userId1, userId2) {
    let promise = new Promise((resolve, reject) => {
      this.removeUserFromFollowingList(userId1, userId2);
      this.removeUserFromFollowerList(userId1, userId2);

      this.decreaseUserFollowingCount(userId1);
      this.decreaseUserFollowersCount(userId2);
      resolve('success');
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Remove User From Following List
   * --------------------------------------------------------------
   * @method removeUserFromFollowingList
   * @param userId1
   * @param userId2
   */
  removeUserFromFollowingList(userId1, userId2) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/following/${userId1}`).child(userId2).remove()
        .then(() => {
          resolve('Removed');
        });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Remove User From Followers List
   * --------------------------------------------------------------
   * @method removeUserFromFollowerList
   * @param userId1
   * @param userId2
   */
  removeUserFromFollowerList(userId1, userId2) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/followers/${userId2}`).child(userId1).remove()
        .then(() => {
          resolve('Removed');
        });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Decrease User Following Count
   * --------------------------------------------------------------
   */
  decreaseUserFollowingCount = (userId) => {
    const databaseRef = this.db.database.ref('users').child(userId).child('totalFollowing');

    databaseRef.transaction(function (current) {

      return current = (current || 0) - 1;

    });
  }

  /**
   * --------------------------------------------------------------
   * Decrease User Followers Count
   * --------------------------------------------------------------
   */
  decreaseUserFollowersCount = (userId) => {
    const databaseRef = this.db.database.ref('users').child(userId).child('totalFollowers');

    databaseRef.transaction(function (current) {

      return current = (current || 0) - 1;

    });
  }

  /**
   * --------------------------------------------------------------
   * Retrieve User Friend ID's
   * --------------------------------------------------------------
   * @method getUserFriendIds     This function will load particulat user
   * all friend ID's from the database.
   * 
   * @param userId 
   */
  getUserFriendIds(userId) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/users/${userId}/friends/`).on('value', snapshot => {
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
   * Exclude Posts from Target User Newsfeed
   * --------------------------------------------------------------
   * @method removeNewsfeedPost   This function exclude the target user's posts from the
   * current user news feed.
   * @param uid         Current User ID
   * @param postowner   Post Owner or 
   */
  removeNewsfeedPost(uid, postowner) {
    let promise = new Promise((resolve, reject) => {
      const ref = this.db.database.ref(`/newsfeed/${uid}`);
      const query = ref.orderByChild('uid').equalTo(postowner);
      query.once('value').then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          ref.child(childSnapshot.key).remove();
        });
      });
    });
    return promise;
  }
}
