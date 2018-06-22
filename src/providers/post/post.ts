/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of post,
 * All the post related methods are written in this file. 
 * Which connects directly to the Firebase database.
 * File path - '../../../src/providers/post/post'
 */

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NotificationProvider } from '../notification/notification';
import { ConnectionsProvider } from '../connections/connections';
import { SharedProvider } from '../shared/shared';
import { CommentModel } from '../../models/comments';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostProvider {

  private _commentModel = {} as CommentModel;
  dbRef: any;
  postRef: any;
  newsfeedRef: any;
  likesRef: any;
  commentsRef: any;

  constructor(
    private db: AngularFireDatabase,
    private notificationProvider: NotificationProvider,
    private connectionsProvider: ConnectionsProvider,
    private sharedProvider: SharedProvider) {
    this.dbRef = this.db.database.ref();
    this.likesRef = this.db.database.ref(`/post-likes/`);
    this.commentsRef = this.db.database.ref(`/post-comments/`);
    this.postRef = this.db.database.ref(`/posts/`);
    this.newsfeedRef = this.db.database.ref(`/newsfeed`);
  }

  /**
   * --------------------------------------------------------------
   * Create a New Post
   * --------------------------------------------------------------
   * @method createPost
   * This function create a new post and add this new post on user own location of `posts`,
   * `newsfeed` and followers `newsfeed` inside of database and increase user total count of post.
   * 
   * @param data Post data
   */
  createPost(data) {
    const fannedOutData = {};
    const postkey = this.db.database.ref().push().key; // Post Unique Key
    const newPostData = Object.assign(data, { key: postkey }); // Post Information

    let promise = new Promise((resolve, reject) => {

      // Create post on user own timeline
      fannedOutData[`/posts/${data.uid}/${postkey}`] = newPostData;

      // Create post on user own newsfeed
      fannedOutData[`newsfeed/${data.uid}/${postkey}`] = newPostData;

      // Call `this.connectionsProvider.getFollowersIds` method from connection provider
      // This method will return user followers ID's
      this.connectionsProvider.getFollowersIds(data.uid).then((followers: any) => {
        followers.forEach((user) => {

          // Create post on each follower's newsfeed
          fannedOutData[`newsfeed/${user}/${postkey}`] = newPostData;

          // Update follower's newsfeed
          this.dbRef.ref.update(fannedOutData);
        });
      });

      // Increase Post Total Count Number
      this.increasePostCount(data.uid);

      this.dbRef.ref.update(fannedOutData).then(() => {
        resolve('success');
      }).catch((err: any) => {
        reject(err);
      });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Update Post
   * --------------------------------------------------------------
   * 
   * @method updatePost
   * @param data    Post data
   */
  updatePost(data) {
    let fannedOutData = {};

    let promise = new Promise((resolve, reject) => {

      // Update post data on user own timeline
      fannedOutData[`/posts/${data.uid}/${data.key}`] = data;

      // Update post data on user own newsfeed
      fannedOutData[`newsfeed/${data.uid}/${data.key}`] = data;

      // Call `this.connectionsProvider.getFollowersIds` method from connection provider
      // This method will return user followers ID's
      this.connectionsProvider.getFollowersIds(data.uid).then((followers: any) => {
        followers.forEach((user) => {
          // Update post on each follower's newsfeed
          fannedOutData[`newsfeed/${user}/${data.key}`] = data;
          this.dbRef.ref.update(fannedOutData);
        });
      });

      this.dbRef.ref.update(fannedOutData).then(() => {
        resolve('success');
      }).catch((err: any) => {
        reject(err);
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Newsfeed Posts
   * --------------------------------------------------------------
   * @param uid           Current User ID
   * @param firstkey      Newsfeed Post's Firstkey
   * @return promise      { Resolved promise return list of array newsfeed posts and
   * rejected promise return errors. }
   * 
   * This method query `newsfeed` location of database and find out following
   * users latest posts, after that query `post-likes` and `post-comments` location
   * to get particular post total likes and comments.
   * 
   */
  getNewsFeedPosts(uid, firstkey?) {
    let queryRef;
    let totalLikes = 0;
    let totalComments = 0;
    let count = 0;
    let posts = [];

    let promise = new Promise((resolve, reject) => {
      if (firstkey) {
        queryRef = this.db.list(`/newsfeed/${uid}`, ref => ref.orderByKey().limitToLast(5).endAt(firstkey));
      } else {
        queryRef = this.db.list(`/newsfeed/${uid}`, ref => ref.orderByKey().limitToLast(5));
      }

      queryRef.valueChanges().subscribe((list: any) => {
        list.forEach(element => {
          this.likesRef.child(`${element.key}`).on('value', (postLikes) => {
            this.commentsRef.child(`${element.key}`).on('value', (postComments) => {
              count++;
              totalLikes = postLikes.numChildren();
              totalComments = postComments.numChildren();
              posts.push(Object.assign(element,
                {
                  'totalLikes': totalLikes, 'totalComments': totalComments
                }
              ));
              if (count === list.length) {
                resolve(posts);
              }
            });
          });
        });
      }, error => {
        reject(error);
      });
    });

    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Timeline Posts
   * --------------------------------------------------------------
   * @method getTimeLinePosts
   * 
   * This method query `posts` location of database and retrieve current user timeline post.
   * After that query inside `post-likes` and `post-comments` location
   * to get particular post total likes and comments.
   * 
   * @param uid         Current User ID
   * @param firstkey    Timeline Post's Firstkey
   * @return Promise    { Resolved promise return list of array timeline posts and
   * rejected promise return errors. }
   * 
   * 
   */
  getTimeLinePosts(uid, firstkey?) {
    let queryRef;
    let posts = []; // Array of post
    let count = 0;
    let totalLikes = 0;
    let totalComments = 0;

    const promise = new Promise((resolve, reject) => {
      if (firstkey) {
        queryRef = this.db.list(`/posts/${uid}`, ref => ref.orderByKey().limitToLast(5).endAt(firstkey));
      } else {
        queryRef = this.db.list(`/posts/${uid}`, ref => ref.orderByKey().limitToLast(5));
      }

      queryRef.valueChanges().subscribe((list: any) => {
        list.forEach(element => {
          this.likesRef.child(`${element.key}`).on('value', (postLikes) => {
            this.commentsRef.child(`${element.key}`).on('value', (postComments) => {
              count++;
              totalLikes = postLikes.numChildren();
              totalComments = postComments.numChildren();
              posts.push(Object.assign(element, { 'totalLikes': totalLikes, 'totalComments': totalComments }));

              if (count === list.length) {
                resolve(posts);
              }
            });
          });
        });
      }, error => {
        reject(error);
      });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Like Post
   * --------------------------------------------------------------
   * @method likePost
   * 
   * This function update and set particular post `isLike` status to `true` reference at
   * `this.likesRef` `this.postRef` and `this.newsfeedRef` location of database. And for the post
   * owner will be sent a like notification.
   * 
   * @param postkey       Post Unique Key
   * @param postOwner     Post Owner ID
   * @param uid           Current User ID
   */
  likePost(postkey, postOwner, uid) {
    return new Observable(observer => {
      this.likesRef.child(postkey).child(uid).set(true).then(() => {
        this.postRef.child(uid).child(postkey).child(`isLike`).set(true);
        this.newsfeedRef.child(uid).child(postkey).child(`isLike`).set(true);
        // Create Notification
        if (uid !== postOwner) {
          this.notificationProvider.createNotification(uid, postOwner, 'like', postkey);
        }
        observer.next('success');
      }).catch(err => {
        observer.error(err);
      })
    });
  }

  /**
   * --------------------------------------------------------------
   * Unlike Post
   * --------------------------------------------------------------
   * @method unlikePost
   * 
   * This function update and set particular post `isLike` status to `false` reference at
   * `this.likesRef` `this.postRef` and `this.newsfeedRef` location of database.
   * 
   * @param postkey       Post Unique Key
   * @param uid           Current User ID
   */
  unlikePost(postkey, uid) {
    return new Observable(observer => {
      this.likesRef.child(postkey).child(uid).remove().then(() => {
        this.postRef.child(uid).child(postkey).child(`isLike`).set(false);
        this.newsfeedRef.child(uid).child(postkey).child(`isLike`).set(false);
        observer.next('success');
      }).catch(err => {
        observer.error(err);
      })
    });
  }

  /**
   * --------------------------------------------------------------
   * New Comment
   * --------------------------------------------------------------
   * @method createComment
   * This function create a new comment for specific post and
   * the opposite user whose post is being commented will get a notification.
   * 
   * @param content         Comment Content
   * @param postInfo        Post Information
   * @param currentUserId   Current User ID
   */
  createComment(content, postInfo, currentUserId) {

    const fannedOutData = {};
    this._commentModel.commentKey = this.db.database.ref().push().key; // Generate New Comment Key
    this._commentModel.commentOwner = currentUserId;
    this._commentModel.postkey = postInfo.key;
    this._commentModel.text = content;
    this._commentModel.createdDate = new Date();

    let promise = new Promise((resolve, reject) => {

      // Update `post-comments` based on generated new commentKey `this._commentModel.commentKey`
      fannedOutData[`/post-comments/${postInfo.key}/${this._commentModel.commentKey}`] = this._commentModel;
      this.dbRef.ref.update(fannedOutData);

      // Send Notification to Post Owner
      if (currentUserId !== postInfo.uid) {
        this.notificationProvider.createNotification(currentUserId, postInfo.uid, 'comment', postInfo.key);
      }
      resolve('success');
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Retrieve Comments
   * --------------------------------------------------------------
   * @method getCommentsByPostId
   * 
   * This method query inside `post-comments` location of database and retrieve specific post
   * list of comments. And also call `this.sharedProvider.getUserInfoByUserId` this
   * method to get user information for each comment, make a new array list of
   * comments with user information called this by `comments`.
   * 
   * @param postId        Post Unique Key
   * @param lastkey       Last key of Comment List
   */
  getCommentsByPostId(postId, lastkey?) {

    let queryRef;
    let count = 0;
    let comments = [];

    let promise = new Promise((resolve, reject) => {

      if (lastkey) {
        queryRef = this.db.list(`/post-comments/${postId}`, ref => ref.orderByKey().limitToLast(10).endAt(lastkey));
      } else {
        queryRef = this.db.list(`/post-comments/${postId}`, ref => ref.orderByKey().limitToLast(10));
      }

      queryRef.valueChanges().subscribe((list: any) => {
        comments = [];
        list.forEach((element) => {
          this.sharedProvider.getUserInfoByUserId(element.commentOwner).then((user: any) => {
            count++;
            comments.push(Object.assign(
              element, { userName: user.name, userImage: user.image }
            ));
            if (count === list.length) {
              resolve(comments);
            }
          });
        });
      }, error => {
        reject(error);
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Retrieve Particular Post Information
   * --------------------------------------------------------------
   * @param uid         User ID
   * @param postkey     Post Key
   * @return promise    Object Data of Particular Post
   * 
   * This method query inside `posts` location of database and retrieve particular post information
   * by post unique key with user uid, after that query `post-likes` and `post-comments` location
   * to get particular post total likes and comments.
   * 
   */
  getPostById(uid, postkey) {
    let totalLikes = 0;
    let totalComments = 0;

    let promise = new Promise((resolve, reject) => {
      this.db.object(`/posts/${uid}/${postkey}`).valueChanges()
        .subscribe((data: any) => {
          this.likesRef.child(`${postkey}`).on('value', (postLikes) => {
            this.commentsRef.child(`${postkey}`).on('value', (postComments) => {
              totalLikes = postLikes.numChildren(); // This post's Total Like
              totalComments = postComments.numChildren(); // This post's Total Comment
              resolve(Object.assign(data, { 'totalLikes': totalLikes, 'totalComments': totalComments }));
            });
          });
        }, err => {
          reject(err);
        })
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Retrieve User Post ID's
   * --------------------------------------------------------------
   * @method getUserPostIDs
   * 
   * This function will load the user's post ID's from the database.
   * @param uid User ID
   */
  getUserPostIDs(uid) {
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/posts/${uid}`).on('value', snapshot => {
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
   * Delete or remove post
   * @param uid user Id
   * @param postkey Post Key
   */
  deletePost(uid, postkey) {
    let followers: any;
    let promise = new Promise((resolve, reject) => {
      this.db.database.ref(`/posts/${uid}/${postkey}`).remove();
      this.db.database.ref(`/newsfeed/${uid}/${postkey}`).remove();

      followers = this.connectionsProvider.getFollowersIds(uid);

      if (followers.length > 0) {
        followers.forEach(element => {
          this.db.database.ref(`/newsfeed/${element.$key}/${postkey}`).remove();
        });
      }
      this.decreasePostCountByUserId(uid);
      resolve('success');
    });
    return promise;
  }

  /**
   * Increase user total post count
   */
  increasePostCount = (uid) => {
    const databaseRef = this.db.database.ref('users').child(uid).child('totalPost');

    databaseRef.transaction(function (current) {

      return current = (current || 0) + 1;

    });
  }

  /**
   * Decrease user total post count
   */
  decreasePostCountByUserId = (uid) => {
    const databaseRef = this.db.database.ref('users').child(uid).child('totalPost');

    databaseRef.transaction(function (current) {

      return current = (current || 0) - 1;

    });
  }
}

