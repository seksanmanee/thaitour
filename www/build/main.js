webpackJsonp([28],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a provider of Shared.
 * File path - '../../../src/providers/utils/utils'
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UtilsProvider = (function () {
    function UtilsProvider(loadingController, alertCtrl, toastCtrl, actionSheetCtrl) {
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    /**
     * --------------------------------------------------------------
     * Present Loading Option
     * --------------------------------------------------------------
     */
    UtilsProvider.prototype.presentLoading = function () {
        this.loading = this.loadingController.create({
            content: 'Please wait..',
            spinner: 'crescent'
        });
        return this.loading.present();
    };
    /**
     * --------------------------------------------------------------
     * Hide Loading Option
     * --------------------------------------------------------------
     */
    UtilsProvider.prototype.hideLoading = function () {
        return this.loading.dismiss();
    };
    /**
     * --------------------------------------------------------------
     * Show Basic Alert
     * --------------------------------------------------------------
     */
    UtilsProvider.prototype.basicAlert = function (title, subTitle) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                buttons: [
                    {
                        text: 'OK',
                        handler: function (data) {
                            resolve('ok');
                        }
                    }
                ]
            });
            alert.present();
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Show Confirm
     * --------------------------------------------------------------
     */
    UtilsProvider.prototype.showConfirm = function (title, message) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [
                    {
                        text: 'No',
                        handler: function () {
                            resolve('no');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            resolve('yes');
                        }
                    }
                ]
            });
            confirm.present();
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Map InfoWindow
     * --------------------------------------------------------------
     */
    UtilsProvider.prototype.mapInfoWindow = function (title, message, buttons) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                cssClass: 'map-info-window'
            });
            var _loop_1 = function () {
                var btnName = buttons[i].text;
                confirm.addButton({
                    text: btnName,
                    handler: function () {
                        resolve(btnName);
                    }
                });
            };
            for (var i = 0; i < buttons.length; i++) {
                _loop_1();
            }
            confirm.present();
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Present Toast
     * --------------------------------------------------------------
     */
    UtilsProvider.prototype.presentToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    /**
     * --------------------------------------------------------------
     * Present Action Sheet
     * --------------------------------------------------------------
     */
    UtilsProvider.prototype.presentActionSheet = function (buttons) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            var actionSheet = _this.actionSheetCtrl.create({
                title: 'Actions'
            });
            var _loop_2 = function () {
                var btnName = buttons[i].text;
                var className = buttons[i].className;
                actionSheet.addButton({
                    text: btnName,
                    cssClass: className,
                    handler: function () {
                        resolve(btnName);
                    }
                });
            };
            for (var i = 0; i < buttons.length; i++) {
                _loop_2();
            }
            actionSheet.addButton({ text: 'Cancel', 'role': 'cancel' });
            actionSheet.present();
        });
        return promise;
    };
    return UtilsProvider;
}());
UtilsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], UtilsProvider);

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connections_connections__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostProvider = (function () {
    function PostProvider(db, notificationProvider, connectionsProvider, sharedProvider) {
        var _this = this;
        this.db = db;
        this.notificationProvider = notificationProvider;
        this.connectionsProvider = connectionsProvider;
        this.sharedProvider = sharedProvider;
        this._commentModel = {};
        /**
         * Increase user total post count
         */
        this.increasePostCount = function (uid) {
            var databaseRef = _this.db.database.ref('users').child(uid).child('totalPost');
            databaseRef.transaction(function (current) {
                return current = (current || 0) + 1;
            });
        };
        /**
         * Decrease user total post count
         */
        this.decreasePostCountByUserId = function (uid) {
            var databaseRef = _this.db.database.ref('users').child(uid).child('totalPost');
            databaseRef.transaction(function (current) {
                return current = (current || 0) - 1;
            });
        };
        this.dbRef = this.db.database.ref();
        this.likesRef = this.db.database.ref("/post-likes/");
        this.commentsRef = this.db.database.ref("/post-comments/");
        this.postRef = this.db.database.ref("/posts/");
        this.newsfeedRef = this.db.database.ref("/newsfeed");
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
    PostProvider.prototype.createPost = function (data) {
        var _this = this;
        var fannedOutData = {};
        var postkey = this.db.database.ref().push().key; // Post Unique Key
        var newPostData = Object.assign(data, { key: postkey }); // Post Information
        var promise = new Promise(function (resolve, reject) {
            // Create post on user own timeline
            fannedOutData["/posts/" + data.uid + "/" + postkey] = newPostData;
            // Create post on user own newsfeed
            fannedOutData["newsfeed/" + data.uid + "/" + postkey] = newPostData;
            // Call `this.connectionsProvider.getFollowersIds` method from connection provider
            // This method will return user followers ID's
            _this.connectionsProvider.getFollowersIds(data.uid).then(function (followers) {
                followers.forEach(function (user) {
                    // Create post on each follower's newsfeed
                    fannedOutData["newsfeed/" + user + "/" + postkey] = newPostData;
                    // Update follower's newsfeed
                    _this.dbRef.ref.update(fannedOutData);
                });
            });
            // Increase Post Total Count Number
            _this.increasePostCount(data.uid);
            _this.dbRef.ref.update(fannedOutData).then(function () {
                resolve('success');
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Update Post
     * --------------------------------------------------------------
     *
     * @method updatePost
     * @param data    Post data
     */
    PostProvider.prototype.updatePost = function (data) {
        var _this = this;
        var fannedOutData = {};
        var promise = new Promise(function (resolve, reject) {
            // Update post data on user own timeline
            fannedOutData["/posts/" + data.uid + "/" + data.key] = data;
            // Update post data on user own newsfeed
            fannedOutData["newsfeed/" + data.uid + "/" + data.key] = data;
            // Call `this.connectionsProvider.getFollowersIds` method from connection provider
            // This method will return user followers ID's
            _this.connectionsProvider.getFollowersIds(data.uid).then(function (followers) {
                followers.forEach(function (user) {
                    // Update post on each follower's newsfeed
                    fannedOutData["newsfeed/" + user + "/" + data.key] = data;
                    _this.dbRef.ref.update(fannedOutData);
                });
            });
            _this.dbRef.ref.update(fannedOutData).then(function () {
                resolve('success');
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
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
    PostProvider.prototype.getNewsFeedPosts = function (uid, firstkey) {
        var _this = this;
        var queryRef;
        var totalLikes = 0;
        var totalComments = 0;
        var count = 0;
        var posts = [];
        var promise = new Promise(function (resolve, reject) {
            if (firstkey) {
                queryRef = _this.db.list("/newsfeed/" + uid, function (ref) { return ref.orderByKey().limitToLast(5).endAt(firstkey); });
            }
            else {
                queryRef = _this.db.list("/newsfeed/" + uid, function (ref) { return ref.orderByKey().limitToLast(5); });
            }
            queryRef.valueChanges().subscribe(function (list) {
                list.forEach(function (element) {
                    _this.likesRef.child("" + element.key).on('value', function (postLikes) {
                        _this.commentsRef.child("" + element.key).on('value', function (postComments) {
                            count++;
                            totalLikes = postLikes.numChildren();
                            totalComments = postComments.numChildren();
                            posts.push(Object.assign(element, {
                                'totalLikes': totalLikes, 'totalComments': totalComments
                            }));
                            if (count === list.length) {
                                resolve(posts);
                            }
                        });
                    });
                });
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
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
    PostProvider.prototype.getTimeLinePosts = function (uid, firstkey) {
        var _this = this;
        var queryRef;
        var posts = []; // Array of post
        var count = 0;
        var totalLikes = 0;
        var totalComments = 0;
        var promise = new Promise(function (resolve, reject) {
            if (firstkey) {
                queryRef = _this.db.list("/posts/" + uid, function (ref) { return ref.orderByKey().limitToLast(5).endAt(firstkey); });
            }
            else {
                queryRef = _this.db.list("/posts/" + uid, function (ref) { return ref.orderByKey().limitToLast(5); });
            }
            queryRef.valueChanges().subscribe(function (list) {
                list.forEach(function (element) {
                    _this.likesRef.child("" + element.key).on('value', function (postLikes) {
                        _this.commentsRef.child("" + element.key).on('value', function (postComments) {
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
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ;
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
    PostProvider.prototype.likePost = function (postkey, postOwner, uid) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.likesRef.child(postkey).child(uid).set(true).then(function () {
                _this.postRef.child(uid).child(postkey).child("isLike").set(true);
                _this.newsfeedRef.child(uid).child(postkey).child("isLike").set(true);
                // Create Notification
                if (uid !== postOwner) {
                    _this.notificationProvider.createNotification(uid, postOwner, 'like', postkey);
                }
                observer.next('success');
            }).catch(function (err) {
                observer.error(err);
            });
        });
    };
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
    PostProvider.prototype.unlikePost = function (postkey, uid) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.likesRef.child(postkey).child(uid).remove().then(function () {
                _this.postRef.child(uid).child(postkey).child("isLike").set(false);
                _this.newsfeedRef.child(uid).child(postkey).child("isLike").set(false);
                observer.next('success');
            }).catch(function (err) {
                observer.error(err);
            });
        });
    };
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
    PostProvider.prototype.createComment = function (content, postInfo, currentUserId) {
        var _this = this;
        var fannedOutData = {};
        this._commentModel.commentKey = this.db.database.ref().push().key; // Generate New Comment Key
        this._commentModel.commentOwner = currentUserId;
        this._commentModel.postkey = postInfo.key;
        this._commentModel.text = content;
        this._commentModel.createdDate = new Date();
        var promise = new Promise(function (resolve, reject) {
            // Update `post-comments` based on generated new commentKey `this._commentModel.commentKey`
            fannedOutData["/post-comments/" + postInfo.key + "/" + _this._commentModel.commentKey] = _this._commentModel;
            _this.dbRef.ref.update(fannedOutData);
            // Send Notification to Post Owner
            if (currentUserId !== postInfo.uid) {
                _this.notificationProvider.createNotification(currentUserId, postInfo.uid, 'comment', postInfo.key);
            }
            resolve('success');
        });
        return promise;
    };
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
    PostProvider.prototype.getCommentsByPostId = function (postId, lastkey) {
        var _this = this;
        var queryRef;
        var count = 0;
        var comments = [];
        var promise = new Promise(function (resolve, reject) {
            if (lastkey) {
                queryRef = _this.db.list("/post-comments/" + postId, function (ref) { return ref.orderByKey().limitToLast(10).endAt(lastkey); });
            }
            else {
                queryRef = _this.db.list("/post-comments/" + postId, function (ref) { return ref.orderByKey().limitToLast(10); });
            }
            queryRef.valueChanges().subscribe(function (list) {
                comments = [];
                list.forEach(function (element) {
                    _this.sharedProvider.getUserInfoByUserId(element.commentOwner).then(function (user) {
                        count++;
                        comments.push(Object.assign(element, { userName: user.name, userImage: user.image }));
                        if (count === list.length) {
                            resolve(comments);
                        }
                    });
                });
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
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
    PostProvider.prototype.getPostById = function (uid, postkey) {
        var _this = this;
        var totalLikes = 0;
        var totalComments = 0;
        var promise = new Promise(function (resolve, reject) {
            _this.db.object("/posts/" + uid + "/" + postkey).valueChanges()
                .subscribe(function (data) {
                _this.likesRef.child("" + postkey).on('value', function (postLikes) {
                    _this.commentsRef.child("" + postkey).on('value', function (postComments) {
                        totalLikes = postLikes.numChildren(); // This post's Total Like
                        totalComments = postComments.numChildren(); // This post's Total Comment
                        resolve(Object.assign(data, { 'totalLikes': totalLikes, 'totalComments': totalComments }));
                    });
                });
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Retrieve User Post ID's
     * --------------------------------------------------------------
     * @method getUserPostIDs
     *
     * This function will load the user's post ID's from the database.
     * @param uid User ID
     */
    PostProvider.prototype.getUserPostIDs = function (uid) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/posts/" + uid).on('value', function (snapshot) {
                if (snapshot.exists()) {
                    resolve(Object.keys(snapshot.val()));
                }
                else {
                    resolve(null);
                }
            });
        });
        return promise;
    };
    /**
     * Delete or remove post
     * @param uid user Id
     * @param postkey Post Key
     */
    PostProvider.prototype.deletePost = function (uid, postkey) {
        var _this = this;
        var followers;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/posts/" + uid + "/" + postkey).remove();
            _this.db.database.ref("/newsfeed/" + uid + "/" + postkey).remove();
            followers = _this.connectionsProvider.getFollowersIds(uid);
            if (followers.length > 0) {
                followers.forEach(function (element) {
                    _this.db.database.ref("/newsfeed/" + element.$key + "/" + postkey).remove();
                });
            }
            _this.decreasePostCountByUserId(uid);
            resolve('success');
        });
        return promise;
    };
    return PostProvider;
}());
PostProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationProvider */],
        __WEBPACK_IMPORTED_MODULE_3__connections_connections__["a" /* ConnectionsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__shared_shared__["a" /* SharedProvider */]])
], PostProvider);

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connections_connections__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friends_friends__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_post__ = __webpack_require__(165);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var UserProvider = (function () {
    function UserProvider(injector, db, storageProvider, connectionsProvider, friendsProvider, sharedProvider, postProvider) {
        this.db = db;
        this.storageProvider = storageProvider;
        this.connectionsProvider = connectionsProvider;
        this.friendsProvider = friendsProvider;
        this.sharedProvider = sharedProvider;
        this.postProvider = postProvider;
        this.dbRef = this.db.database.ref();
    }
    /**
     * --------------------------------------------------------------
     * Update User Information
     * --------------------------------------------------------------
     * @method updateUserData
     * @param data    User Informations
     */
    UserProvider.prototype.updateUserData = function (data) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.list('users').update(data.uid, data).then(function (success) {
                resolve(success);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ;
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
    UserProvider.prototype.updateUserName = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promise;
            return __generator(this, function (_a) {
                promise = new Promise(function (resolve, reject) {
                    var fannedOutData = {};
                    // Update User's own Post and Newsfeed
                    _this.postProvider.getUserPostIDs(data.uid).then(function (postKeys) {
                        if (postKeys) {
                            for (var i = 0; i < postKeys.length; i++) {
                                fannedOutData['/posts/' + data.uid + '/' + postKeys[i] + '/' + 'userName'] = data.name;
                                fannedOutData['/newsfeed/' + data.uid + '/' + postKeys[i] + '/' + 'userName'] = data.name;
                            }
                        }
                        // Update User's Followers Post and Newsfeed
                        _this.connectionsProvider.getFollowersIds(data.uid).then(function (followers) {
                            if (followers && postKeys) {
                                for (var i = 0; i < followers.length; i++) {
                                    for (var j = 0; j < postKeys.length; j++) {
                                        fannedOutData['/newsfeed/' + followers[i] + '/' + postKeys[j] + '/' + 'userName'] = data.name;
                                    }
                                }
                            }
                            // Update User Friend's Location
                            _this.sharedProvider.getUserFriendIds(data.uid).then(function (friends) {
                                if (friends) {
                                    for (var i = 0; i < friends.length; i++) {
                                        fannedOutData['/friends-location/' + friends[i] + '/' + data.uid + '/' + 'userName'] = data.name;
                                    }
                                }
                                // Update Local Storage
                                _this.storageProvider.set(data.uid, data.name, data.email, data.image).then(function () {
                                    _this.dbRef.ref.update(fannedOutData);
                                    resolve('success');
                                }, function (error) {
                                    reject(error);
                                });
                            });
                        });
                    });
                });
                return [2 /*return*/, promise];
            });
        });
    };
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
    UserProvider.prototype.updateProfileImage = function (data) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var fannedOutData = {};
            // Update User Own Record
            fannedOutData['/users/' + data.uid + '/' + 'image'] = data.image;
            // Update User's own Post and Newsfeed
            _this.postProvider.getUserPostIDs(data.uid).then(function (postKeys) {
                if (postKeys) {
                    for (var i = 0; i < postKeys.length; i++) {
                        fannedOutData['/posts/' + data.uid + '/' + postKeys[i] + '/' + 'userImage'] = data.image;
                        fannedOutData['/newsfeed/' + data.uid + '/' + postKeys[i] + '/' + 'userImage'] = data.image;
                    }
                }
                // Update User's Followers Post and Newsfeed
                _this.connectionsProvider.getFollowersIds(data.uid).then(function (followers) {
                    if (followers && postKeys) {
                        for (var i = 0; i < followers.length; i++) {
                            for (var j = 0; j < postKeys.length; j++) {
                                fannedOutData['/newsfeed/' + followers[i] + '/' + postKeys[j] + '/' + 'userImage'] = data.image;
                            }
                        }
                    }
                    // Update User Friend's Location
                    _this.sharedProvider.getUserFriendIds(data.uid).then(function (friends) {
                        if (friends) {
                            for (var i = 0; i < friends.length; i++) {
                                fannedOutData['/friends-location/' + friends[i] + '/' + data.uid + '/' + 'userImage'] = data.image;
                            }
                        }
                        // Update Local Storage
                        _this.storageProvider.set(data.uid, data.name, data.email, data.image).then(function () {
                            _this.dbRef.ref.update(fannedOutData);
                            resolve('success');
                        }, function (error) {
                            reject(error);
                        });
                    });
                });
            });
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Get Target User Information
     * --------------------------------------------------------------
     * @method getTargetUserInfos
     * @param userId Particular User Id
     * @param currentUserId Current UserId
     */
    UserProvider.prototype.getTargetUserInfos = function (userId, currentUserId) {
        return __awaiter(this, void 0, void 0, function () {
            var userCustomObj, userInfo, friends, findFriend;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userCustomObj = {
                            isFriend: false,
                            isFollowing: false,
                            isReceivedFrndReq: false,
                            isSendFrndReq: false
                        };
                        return [4 /*yield*/, this.sharedProvider.getUserInfoByUserId(userId)];
                    case 1:
                        userInfo = _a.sent();
                        if (!userInfo) return [3 /*break*/, 5];
                        if (userInfo.friends) {
                            friends = Object.keys(userInfo.friends);
                            findFriend = friends.find(function (n) { return n === currentUserId; });
                            // If current userId exist on the user's friend list
                            // make `userCustomObj.isFriend` property is `true`
                            if (findFriend) {
                                userCustomObj.isFriend = true;
                            }
                        }
                        // Call `this.friendsProvider.getReceivedFriendRequestList` method to retrieve user
                        // received friend request list
                        return [4 /*yield*/, this.friendsProvider.getReceivedFriendRequestList(currentUserId).then(function (receivedFriendReq) {
                                if (receivedFriendReq) {
                                    var findreceivedFriend = receivedFriendReq.find(function (n) { return n === userId; });
                                    // if current user get the friend request from the targeted user,
                                    // make `userCustomObj.isReceivedFrndReq` property is `true`
                                    if (findreceivedFriend) {
                                        userCustomObj.isReceivedFrndReq = true;
                                    }
                                }
                            })];
                    case 2:
                        // Call `this.friendsProvider.getReceivedFriendRequestList` method to retrieve user
                        // received friend request list
                        _a.sent();
                        // Call `this.friendsProvider.getSendFriendRequestList` method to retrieve user
                        // list of sending friend requests
                        return [4 /*yield*/, this.friendsProvider.getSendFriendRequestList(currentUserId).then(function (sendFriendReq) {
                                if (sendFriendReq) {
                                    var findSendFriend = sendFriendReq.find(function (n) { return n === userId; });
                                    // if current user sent the friend request to targeted user,
                                    // make `userCustomObj.isSendFrndReq` property is `true`
                                    if (findSendFriend) {
                                        userCustomObj.isSendFrndReq = true;
                                    }
                                }
                            })];
                    case 3:
                        // Call `this.friendsProvider.getSendFriendRequestList` method to retrieve user
                        // list of sending friend requests
                        _a.sent();
                        // Call `this.connectionsProvider.getFollowingIds` method to retrieve following user's ID
                        return [4 /*yield*/, this.connectionsProvider.getFollowingIds(currentUserId).then(function (following) {
                                if (following) {
                                    var findFollowingUser = following.find(function (n) { return n === userId; });
                                    // If current user follow to targeted user
                                    // make `userCustomObj.isFollowing` property is `true`
                                    if (findFollowingUser) {
                                        userCustomObj.isFollowing = true;
                                    }
                                }
                            })];
                    case 4:
                        // Call `this.connectionsProvider.getFollowingIds` method to retrieve following user's ID
                        _a.sent();
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                                observer.next(Object.assign(userInfo, userCustomObj));
                            })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_5__utils_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_3__connections_connections__["a" /* ConnectionsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__friends_friends__["a" /* FriendsProvider */],
        __WEBPACK_IMPORTED_MODULE_6__shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_7__post_post__["a" /* PostProvider */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(32);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatProvider = (function () {
    function ChatProvider(db, sharedProvider) {
        this.db = db;
        this.sharedProvider = sharedProvider;
    }
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
    ChatProvider.prototype.getChatRef = function (userId, partnerId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var ref1 = _this.db.object("/chats/" + userId + "," + partnerId).snapshotChanges();
            ref1.subscribe(function (snapshot) {
                var a = snapshot.payload.val();
                if (a) {
                    resolve(userId + "," + partnerId);
                }
                else {
                    var ref2 = _this.db.object("/chats/" + partnerId + "," + userId).snapshotChanges();
                    ref2.subscribe(function (snapshot) {
                        var b = snapshot.payload.val();
                        if (!b) {
                            _this.updateChatHistory(userId, partnerId);
                        }
                    });
                    resolve(partnerId + "," + userId);
                }
            });
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Update Last Time of Two Users Chat History
     * --------------------------------------------------------------
     * @method updateChatHistory
     * @param userId      Current User ID
     * @param partnerId   Partner ID
     */
    ChatProvider.prototype.updateChatHistory = function (userId, partnerId) {
        // First User
        var user1 = this.db.object("/chat-history/" + userId + "/" + partnerId);
        user1.set(new Date().getTime());
        // Second User
        var user2 = this.db.object("/chat-history/" + partnerId + "/" + userId);
        user2.set(new Date().getTime());
    };
    /**
     * --------------------------------------------------------------
     * Increase Chat Notification
     * --------------------------------------------------------------
     * @param partnerId         Partner ID
     * @param userId            Current User ID
     */
    ChatProvider.prototype.increaseNotification = function (partnerId, userId) {
        var ref1 = this.db.database.ref("/chat-notification/" + partnerId + "/").child("" + userId);
        ref1.once('value', function (snapshot) {
            ref1.transaction(function (current) {
                return current = (current || 0) + 1;
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Total Unread Chat Thread
     * --------------------------------------------------------------
     * @param userId  Current user Id
     * @return Observable
     */
    ChatProvider.prototype.totalUnreadChat = function (userId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.db.list("/chat-notification/" + userId + "/").valueChanges().subscribe(function (data) {
                var totalUnread = data.filter(function (n) { return n !== 0; });
                observer.next(totalUnread.length);
            }, function (error) {
                observer.error(error);
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Read Chat Messages
     * --------------------------------------------------------------
     * @param userId
     * @param partnerId
     */
    ChatProvider.prototype.readChatMsg = function (userId, partnerId) {
        this.db.database.ref("/chat-notification/" + userId + "/").child("" + partnerId).set(0);
    };
    /**
     * --------------------------------------------------------------
     * Retrieve Chat Hostory
     * --------------------------------------------------------------
     * @method getChatHistoryList
     * @param       userId      User ID
     * @return      Promise
     */
    ChatProvider.prototype.getChatHistoryList = function (userId) {
        var _this = this;
        // Initial count
        var count = 0;
        // Make a new array list of user chat history
        var chatHistoryList = [];
        var promise = new Promise(function (resolve, reject) {
            // Get list of user chat hostory by calling `getChatHistories` function.
            _this.getChatHistories(userId).then(function (users) {
                // Get list of chat thread notification by calling `getChatThreadNotification` function.
                _this.getChatThreadNotification(userId).then(function (notifications) {
                    users.forEach(function (eachUser) {
                        var findTargetUser = notifications.find(function (n) { return n.key === eachUser.key; });
                        // Get user details information
                        _this.sharedProvider.getUserInfoByUserId(eachUser.key).then(function (user) {
                            count++;
                            if (findTargetUser) {
                                chatHistoryList.push(Object.assign(user, { chatLastTime: eachUser.value, unreadMsg: findTargetUser.value }));
                            }
                            else {
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
    };
    /**
     * --------------------------------------------------------------
     * Retrieve User Chat Thread Notification Number
     * --------------------------------------------------------------
     * @method getChatThreadNotification
     * @param userId  Current User ID
     */
    ChatProvider.prototype.getChatThreadNotification = function (userId) {
        var _this = this;
        var list = [];
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/chat-notification/" + userId + "/").on('value', function (snapshot) {
                if (snapshot.exists()) {
                    snapshot.forEach(function (notification) {
                        list.push({ key: notification.key, value: notification.val() });
                    });
                    resolve(list);
                }
                else {
                    resolve(list);
                }
            });
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Retrieve Chat User List
     * --------------------------------------------------------------
     * @method    getChatHistories
     * @param     userId            userID
     * @return    Promise
     */
    ChatProvider.prototype.getChatHistories = function (userId) {
        var _this = this;
        var list = [];
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/chat-history/" + userId).on('value', function (snapshot) {
                if (snapshot.exists()) {
                    snapshot.forEach(function (chatHistory) {
                        list.push({ key: chatHistory.key, value: chatHistory.val() });
                    });
                    resolve(list);
                }
                else {
                    resolve(list);
                }
            });
        });
        return promise;
    };
    ;
    return ChatProvider;
}());
ChatProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* SharedProvider */]])
], ChatProvider);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsLocationMapProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a provider of location map,
 * Related friends location map methods are written in this file.
 * File path - '../../../src/providers/friends-location-map/friends-location-map'
 */






var FriendsLocationMapProvider = (function () {
    function FriendsLocationMapProvider(http, geolocation, afDB, sharedProvider) {
        this.http = http;
        this.geolocation = geolocation;
        this.afDB = afDB;
        this.sharedProvider = sharedProvider;
        this.dbRef = this.afDB.database.ref();
    }
    /**
     * --------------------------------------------------------------
     * Get User Current Location
     * --------------------------------------------------------------
     * @method getCurrentLocation
     * Get Current Location using freegeoip.net because
     * It's fast and quite accurate
     */
    FriendsLocationMapProvider.prototype.getCurrentLocation = function () {
        var _this = this;
        // `api1` - Public HTTP API to search the geolocation of IP addresses
        var api1 = 'http://freegeoip.net/json/';
        // `api2` - Google API get formatted_address from google maps api json
        var api2 = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].create(function (observer) {
            _this.http.get(api1).map(function (res) { return res.json(); })
                .subscribe(function (position) {
                _this.http.get(api2 + position.latitude + ',' + position.longitude + '&sensor=true')
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    var address = res.results[0];
                    if (address) {
                        var location_1 = {
                            address: address.formatted_address,
                            latitude: position.latitude,
                            longitude: position.longitude
                        };
                        observer.next(location_1);
                    }
                });
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Retrieve User Friends Location
     * --------------------------------------------------------------
     * @method getFriendsLocation
     * This funtion collect friends location data from database and apply Haversine rules to calculate
     * users location between current user location and target user.
     *
     * @param uid                 Current User ID
     * @param currentLocation     Current User Location
     */
    FriendsLocationMapProvider.prototype.getFriendsLocation = function (uid, currentLocation) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afDB.list("/friends-location/" + uid).valueChanges().subscribe(function (list) {
                var friendsLocation = list.filter(function (elm) { return elm.isShareLocation == true; });
                var locations = _this.applyHaversine(currentLocation, friendsLocation);
                locations.sort(function (locationA, locationB) {
                    return locationA.distance - locationB.distance;
                });
                resolve(locations);
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Haversine Formula
     * --------------------------------------------------------------
     * @method applyHaversine
     * This function calculate great-circle distances between two points on a sphere
     * from their longitudes and latitudes.
     * @param currentLocation     Point of Current User Location
     * @param friendsLocation     Point of Target User Location
     */
    FriendsLocationMapProvider.prototype.applyHaversine = function (currentLocation, friendsLocation) {
        var _this = this;
        var usersLocation = {
            lat: currentLocation.latitude,
            lng: currentLocation.longitude
        };
        friendsLocation.map(function (location) {
            var placeLocation = {
                lat: location.latitude,
                lng: location.longitude
            };
            location.distance = _this.getDistanceBetweenPoints(usersLocation, placeLocation, 'miles').toFixed(2);
        });
        return friendsLocation;
    };
    /**
     * --------------------------------------------------------------
     * Distance Between Points
     * --------------------------------------------------------------
     * @method getDistanceBetweenPoints
     * To find the distance between two points (x1,y1) and (x2,y2)
     */
    FriendsLocationMapProvider.prototype.getDistanceBetweenPoints = function (start, end, units) {
        var earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        var R = earthRadius[units || 'miles'];
        var lat1 = start.lat;
        var lon1 = start.lng;
        var lat2 = end.lat;
        var lon2 = end.lng;
        var dLat = this.toRad((lat2 - lat1));
        var dLon = this.toRad((lon2 - lon1));
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    FriendsLocationMapProvider.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    /**
     * --------------------------------------------------------------
     * Update User Share Location Status
     * --------------------------------------------------------------
     * @method updateShareLocation    This function update user share location status.
     * Share location will be updated on user own profile `users` and user friends locaton `friends-location`
     * @param uid                     Current User ID
     * @param isShareLocation         User Location Share Status
     */
    FriendsLocationMapProvider.prototype.updateShareLocation = function (uid, isShareLocation) {
        var _this = this;
        var fannedOutData = {};
        var promise = new Promise(function (resolve, reject) {
            // Update user own record
            fannedOutData['/users/' + uid + '/' + 'isShareLocation'] = isShareLocation;
            _this.dbRef.ref.update(fannedOutData);
            // Update user friends location
            _this.sharedProvider.getUserFriendIds(uid).then(function (friends) {
                friends.forEach(function (element) {
                    fannedOutData['/friends-location/' + element + '/' + uid + '/' + 'isShareLocation'] = isShareLocation;
                    _this.dbRef.ref.update(fannedOutData);
                });
            });
            resolve('success');
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Add Friend Location
     * --------------------------------------------------------------
     * @method addFriendLocationById
     * @param uid1
     * @param uid2
     */
    FriendsLocationMapProvider.prototype.addFriendLocationById = function (uid1, uid2) {
        var _this = this;
        var user1Info = {};
        var user2Info = {};
        var promise = new Promise(function (resolve, reject) {
            _this.sharedProvider.getUserInfoByUserId(uid1).then(function (user1) {
                _this.sharedProvider.getUserInfoByUserId(uid2).then(function (user2) {
                    if (user1) {
                        user1Info.uid = uid1;
                        user1Info.userName = user1.name;
                        user1Info.userImage = user1.image;
                        if (user1.isShareLocation && user1.location) {
                            user1Info.latitude = user1.location.latitude;
                            user1Info.longitude = user1.location.longitude;
                            user1Info.address = user1.location.address;
                            user1Info.isShareLocation = user1.isShareLocation;
                        }
                    }
                    if (user2) {
                        user2Info.uid = uid2;
                        user2Info.userName = user2.name;
                        user2Info.userImage = user2.image;
                        if (user2.isShareLocation && user2.location) {
                            user2Info.latitude = user2.location.latitude;
                            user2Info.longitude = user2.location.longitude;
                            user2Info.address = user2.location.address;
                            user2Info.isShareLocation = user2.isShareLocation;
                        }
                    }
                    _this.afDB.database.ref("/friends-location/" + uid2 + "/" + uid1).update(user1Info);
                    _this.afDB.database.ref("/friends-location/" + uid1 + "/" + uid2).update(user2Info);
                    resolve('success');
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    return FriendsLocationMapProvider;
}());
FriendsLocationMapProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared__["a" /* SharedProvider */]])
], FriendsLocationMapProvider);

//# sourceMappingURL=friends-location-map.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmobFreeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_admob__ = __webpack_require__(714);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a provider of Admob Free.
 * Native plugin - https://ionicframework.com/docs/native/admob-free/
 * File path - '../../../src/providers/admob-free/admob-free'
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdmobFreeProvider = (function () {
    function AdmobFreeProvider(platform, admobFree) {
        var _this = this;
        this.platform = platform;
        this.admobFree = admobFree;
        this.bannerPrepared = false;
        this.interstitialPrepared = false;
        this.bannerAtTop = false;
        this.bannerOverlap = true;
        this.adAutoShow = true;
        this.bannerSizes = [
            {
                android: {
                    BANNER: 'BANNER',
                    IAB_BANNER: 'IAB_BANNER',
                    IAB_LEADERBOARD: 'IAB_LEADERBOARD',
                    IAB_MRECT: 'IAB_MRECT',
                    LARGE_BANNER: 'LARGE_BANNER',
                    SMART_BANNER: 'SMART_BANNER',
                    FLUID: 'FLUID',
                    FULL_BANNER: 'FULL_BANNER',
                    LEADERBOARD: 'LEADERBOARD',
                    MEDIUM_RECTANGLE: 'MEDIUM_RECTANGLE',
                    SEARCH: 'SEARCH',
                    WIDE_SKYSCRAPER: 'WIDE_SKYSCRAPER'
                }
            },
            {
                ios: {
                    BANNER: 'BANNER',
                    IAB_BANNER: 'IAB_BANNER',
                    IAB_LEADERBOARD: 'IAB_LEADERBOARD',
                    IAB_MRECT: 'IAB_MRECT',
                    LARGE_BANNER: 'LARGE_BANNER',
                    SMART_BANNER: 'SMART_BANNER',
                    FLUID: 'FLUID'
                }
            }
        ];
        this.platform.ready().then(function () {
            // For Android
            if (platform.is('android')) {
                _this.admobId = {
                    banner: __WEBPACK_IMPORTED_MODULE_3__config_admob__["a" /* AdmobConfig */].banner,
                    interstitial: __WEBPACK_IMPORTED_MODULE_3__config_admob__["a" /* AdmobConfig */].interstitial
                };
                _this.bannerSizeOpts = _this.bannerSizes[0]['android'];
            }
            // For iOS
            if (platform.is('ios')) {
                _this.admobId = {
                    banner: __WEBPACK_IMPORTED_MODULE_3__config_admob__["a" /* AdmobConfig */].banner,
                    interstitial: __WEBPACK_IMPORTED_MODULE_3__config_admob__["a" /* AdmobConfig */].interstitial
                };
                _this.bannerSizeOpts = _this.bannerSizes[1]['ios'];
            }
            _this.init();
        });
    }
    /**
     * AdMob initialising
     */
    AdmobFreeProvider.prototype.init = function () {
        // Not found any Admob
        if (!this.admobFree) {
            console.log("No AdMob?");
            return;
        }
        // Initialise other default config options for banner
        this.bannerConfig = {
            overlap: true,
            offsetTopBar: true,
            isTesting: true,
            size: this.bannerSizeOpts,
            bannerAtTop: this.bannerAtTop,
            autoShow: this.adAutoShow
        };
        this.admobFree.banner.config(this.bannerConfig);
        // Initialise other default config options for interstitial
        this.interstitialConfig = {
            isTesting: true,
            autoShow: this.adAutoShow
        };
        this.admobFree.interstitial.config(this.interstitialConfig);
    };
    /**
     * Prepare Banner
     */
    AdmobFreeProvider.prototype.prepareBanner = function () {
        var _this = this;
        this.bannerConfig.id = this.admobId.banner;
        this.admobFree.banner.config(this.bannerConfig);
        return this.admobFree.banner.prepare()
            .then(function () {
            _this.bannerPrepared = true;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    /**
     * Remove Banner
     */
    AdmobFreeProvider.prototype.removeBanner = function () {
        var _this = this;
        this.admobFree.banner.remove()
            .then(function () {
            _this.bannerPrepared = false;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    /**
     * Prepare Interstitial
     */
    AdmobFreeProvider.prototype.prepareInterstitial = function () {
        var _this = this;
        this.interstitialConfig.id = this.admobId.interstitial;
        this.admobFree.interstitial.config(this.interstitialConfig);
        return this.admobFree.interstitial.prepare()
            .then(function () {
            _this.interstitialPrepared = true;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    return AdmobFreeProvider;
}());
AdmobFreeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */]])
], AdmobFreeProvider);

//# sourceMappingURL=admob-free.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/authentication/forget-password/forget-password.module": [
		740,
		27
	],
	"../pages/authentication/lead-landing/lead-landing.module": [
		737,
		26
	],
	"../pages/authentication/sign-in/sign-in.module": [
		739,
		11
	],
	"../pages/authentication/sign-up/sign-up.module": [
		738,
		8
	],
	"../pages/chat/chat-box/chat-box.module": [
		745,
		7
	],
	"../pages/chat/chat-contacts/chat-contacts.module": [
		741,
		25
	],
	"../pages/chat/chat-recent-history/chat-recent-history.module": [
		744,
		6
	],
	"../pages/chat/chat.module": [
		742,
		24
	],
	"../pages/comments/comments.module": [
		743,
		4
	],
	"../pages/discover-people/discover-people.module": [
		750,
		23
	],
	"../pages/edit-profile/edit-profile.module": [
		746,
		22
	],
	"../pages/email-change/email-change.module": [
		752,
		10
	],
	"../pages/followers/followers.module": [
		747,
		21
	],
	"../pages/following/following.module": [
		748,
		20
	],
	"../pages/friend-request/friend-request.module": [
		749,
		19
	],
	"../pages/friends-location-list/friends-location-list.module": [
		751,
		18
	],
	"../pages/friends-location-map/friends-location-map.module": [
		753,
		17
	],
	"../pages/friends/friends.module": [
		757,
		16
	],
	"../pages/home/home.module": [
		755,
		15
	],
	"../pages/news-feed/news-feed.module": [
		754,
		3
	],
	"../pages/notification/notification.module": [
		756,
		2
	],
	"../pages/password-change/password-change.module": [
		760,
		9
	],
	"../pages/post/post.module": [
		758,
		14
	],
	"../pages/profile/profile.module": [
		759,
		1
	],
	"../pages/settings/settings.module": [
		762,
		13
	],
	"../pages/share-location/share-location.module": [
		761,
		12
	],
	"../pages/single-post/single-post.module": [
		764,
		5
	],
	"../pages/user-public-profile/user-public-profile.module": [
		763,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 227;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(26);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a provider of Shared.
 * File path - '../../../src/providers/shared/shared'
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedProvider = (function () {
    function SharedProvider(db) {
        var _this = this;
        this.db = db;
        /**
         * --------------------------------------------------------------
         * Increase User Following Count
         * --------------------------------------------------------------
         */
        this.increaseUserFollowingCount = function (userId) {
            var databaseRef = _this.db.database.ref('users').child(userId).child('totalFollowing');
            databaseRef.transaction(function (current) {
                return current = (current || 0) + 1;
            });
        };
        /**
         * --------------------------------------------------------------
         * Increase User Followers Count
         * --------------------------------------------------------------
         */
        this.increaseUserFollowersCount = function (userId) {
            var databaseRef = _this.db.database.ref('users').child(userId).child('totalFollowers');
            databaseRef.transaction(function (current) {
                return current = (current || 0) + 1;
            });
        };
        /**
         * --------------------------------------------------------------
         * Get User Information By User ID
         * --------------------------------------------------------------
         */
        this.getUserInfoByUserId = function (userId) { return new Promise(function (resolve, reject) {
            _this.db.database.ref("/users/" + userId)
                .once('value', function (snapuser) {
                if (snapuser.exists()) {
                    var userInfo = snapuser.val();
                    resolve(userInfo);
                }
            }).catch(function (err) {
                reject(err);
            });
        }); };
        /**
         * --------------------------------------------------------------
         * Decrease User Following Count
         * --------------------------------------------------------------
         */
        this.decreaseUserFollowingCount = function (userId) {
            var databaseRef = _this.db.database.ref('users').child(userId).child('totalFollowing');
            databaseRef.transaction(function (current) {
                return current = (current || 0) - 1;
            });
        };
        /**
         * --------------------------------------------------------------
         * Decrease User Followers Count
         * --------------------------------------------------------------
         */
        this.decreaseUserFollowersCount = function (userId) {
            var databaseRef = _this.db.database.ref('users').child(userId).child('totalFollowers');
            databaseRef.transaction(function (current) {
                return current = (current || 0) - 1;
            });
        };
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
    SharedProvider.prototype.addUserInFollowingList = function (currentUserId, targetUserId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/following/" + currentUserId).child(targetUserId).set(true)
                .then(function (success) {
                resolve('success');
            });
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Add User To User Follower List
     * --------------------------------------------------------------
     * @method addUserInFollowerList
     * @param currentUserId
     * @param targetUserId
     */
    SharedProvider.prototype.addUserInFollowerList = function (currentUserId, targetUserId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/followers/" + targetUserId).child(currentUserId).set(true)
                .then(function (success) {
                resolve('success');
            });
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Recent User List
     * --------------------------------------------------------------
     * @method getRecentUserListById
     * This function retrieve recent user list from database.
     *
     * @param userId    Current User ID
     */
    SharedProvider.prototype.getRecentUserListById = function (userId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/users").limitToLast(30).orderByKey().on('value', function (recentUserList) {
                var values = Object.keys(recentUserList.val()).map(function (key) { return recentUserList.val()[key]; }).map(function (x) { return x; });
                var excludeCurrentUser = values.filter(function (n) { return n.uid !== userId; });
                resolve(excludeCurrentUser);
            });
        });
        return promise;
    };
    ;
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
    SharedProvider.prototype.unfollowUser = function (userId1, userId2) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.removeUserFromFollowingList(userId1, userId2);
            _this.removeUserFromFollowerList(userId1, userId2);
            _this.decreaseUserFollowingCount(userId1);
            _this.decreaseUserFollowersCount(userId2);
            resolve('success');
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Remove User From Following List
     * --------------------------------------------------------------
     * @method removeUserFromFollowingList
     * @param userId1
     * @param userId2
     */
    SharedProvider.prototype.removeUserFromFollowingList = function (userId1, userId2) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/following/" + userId1).child(userId2).remove()
                .then(function () {
                resolve('Removed');
            });
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Remove User From Followers List
     * --------------------------------------------------------------
     * @method removeUserFromFollowerList
     * @param userId1
     * @param userId2
     */
    SharedProvider.prototype.removeUserFromFollowerList = function (userId1, userId2) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/followers/" + userId2).child(userId1).remove()
                .then(function () {
                resolve('Removed');
            });
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Retrieve User Friend ID's
     * --------------------------------------------------------------
     * @method getUserFriendIds     This function will load particulat user
     * all friend ID's from the database.
     *
     * @param userId
     */
    SharedProvider.prototype.getUserFriendIds = function (userId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/users/" + userId + "/friends/").on('value', function (snapshot) {
                if (snapshot.exists()) {
                    resolve(Object.keys(snapshot.val()));
                }
                else {
                    resolve(null);
                }
            });
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Exclude Posts from Target User Newsfeed
     * --------------------------------------------------------------
     * @method removeNewsfeedPost   This function exclude the target user's posts from the
     * current user news feed.
     * @param uid         Current User ID
     * @param postowner   Post Owner or
     */
    SharedProvider.prototype.removeNewsfeedPost = function (uid, postowner) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var ref = _this.db.database.ref("/newsfeed/" + uid);
            var query = ref.orderByChild('uid').equalTo(postowner);
            query.once('value').then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    ref.child(childSnapshot.key).remove();
                });
            });
        });
        return promise;
    };
    return SharedProvider;
}());
SharedProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], SharedProvider);

//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user__ = __webpack_require__(166);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a provider of authentication,
 * All the authentication methods are written in this file.
 * Which connects directly to the Firebase database
 * File path - '../../../src/providers/authentication/authentication'
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthenticationProvider = (function () {
    function AuthenticationProvider(platform, afAuth, db, fb, storageProvider, app, sharedProvider, userProvider) {
        var _this = this;
        this.platform = platform;
        this.afAuth = afAuth;
        this.db = db;
        this.fb = fb;
        this.storageProvider = storageProvider;
        this.app = app;
        this.sharedProvider = sharedProvider;
        this.userProvider = userProvider;
        /**
         * --------------------------------------------------------------
         * User Registration
         * --------------------------------------------------------------
         * @method  registration
         * @param   credentials
         * @returns { Observable }
         */
        this.registration = function (credentials) {
            var userId; // User ID
            var userObj = {}; // User Data
            // Create new Observable
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                return _this.afAuth.auth
                    .createUserWithEmailAndPassword(credentials.email, credentials.password)
                    .then(function (user) {
                    // The new user uid replace with this userId
                    userId = user.uid;
                    // Make a user object
                    userObj = {
                        name: credentials.displayName,
                        email: user.email,
                        emailVerified: false,
                        provider: 'email',
                        image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/socialapp/profile-photo.png',
                        uid: userId,
                        isShareLocation: credentials.isShareLocation // Location Status
                    };
                    if (credentials.location) {
                        userObj.location = credentials.location;
                    }
                    // Update User Information
                    _this.db.database.ref("/users/" + userId).set(userObj);
                    // Add this user in this user following list
                    _this.sharedProvider.addUserInFollowingList(userId, userId);
                    // Save user information in localstorage
                    _this.storageProvider.set(userId, userObj.name, userObj.email, userObj.image)
                        .then(function () {
                        observer.next('success');
                    }, function (error) {
                        observer.error(error);
                    });
                })
                    .catch(function (error) {
                    if (error) {
                        switch (error.code) {
                            case 'INVALID_EMAIL':
                                observer.error('E-mail invalid.');
                                break;
                            case 'EMAIL_TAKEN':
                                observer.error('This email already taken');
                                break;
                            case 'NETWORK_ERROR':
                                observer.error('NETWORK ERROR');
                                break;
                            default:
                                observer.error(error);
                        }
                    }
                });
            });
        };
        /**
         * --------------------------------------------------------------
         * Login With User Email Address
         * --------------------------------------------------------------
         * @method    loginWithEmail
         * @param     credentials
         * @returns   { Observable }
         */
        this.loginWithEmail = function (email, password) {
            var userId; // UserId
            // Create new Observable
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                    .then(function (data) {
                    // The new user uid replace with this userId
                    userId = data.uid;
                    // Get user Information
                    _this.sharedProvider.getUserInfoByUserId(userId)
                        .then(function (user) {
                        // Save user information in localstorage
                        _this.storageProvider.set(userId, user.name, user.email, user.image).then(function () {
                            observer.next(data);
                        }, function (error) {
                            observer.error(error);
                        });
                    })
                        .catch(function (err) {
                        observer.error(err);
                    });
                })
                    .catch(function (err) {
                    observer.error(err);
                });
            });
        };
        /**
         * --------------------------------------------------------------
         * Login With Facebook
         * --------------------------------------------------------------
         * @method  loginWithFacebook
         * @returns { Observable }
         */
        this.loginWithFacebook = function () {
            var userObj = {}; // User Object
            // Create a new Observable
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                // For the Cordova platform
                if (_this.platform.is('cordova')) {
                    // Call Facebook’s native plugin to get the user to log-in with Facebook.
                    return _this.fb.login(['public_profile', 'email'])
                        .then(function (res) {
                        // Get facebook credential information
                        var provider = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                        // Get the token from facebook auth provider and sign in with this credentials in firebase
                        return _this.afAuth.auth.signInWithCredential(provider)
                            .then(function (res) {
                            userObj = {
                                name: res.displayName,
                                email: res.email,
                                provider: 'facebook',
                                image: res.photoURL,
                                uid: res.uid
                            };
                            // Update user Information
                            _this.userProvider.updateUserData(userObj)
                                .then(function () {
                                // Save user information in localstorage
                                _this.storageProvider.set(userObj.uid, userObj.name, userObj.email, userObj.image)
                                    .then(function () {
                                    observer.next();
                                }, function (error) {
                                    observer.error(error);
                                });
                            });
                        })
                            .catch(function (err) {
                            observer.error(err);
                        });
                    })
                        .catch(function (err) {
                        observer.error(err);
                    });
                }
                else {
                    // To sign in with a pop-up window, call signInWithPopup
                    _this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].FacebookAuthProvider())
                        .then(function (res) {
                        // Make signed-in user info.
                        userObj = {
                            name: res.user.displayName,
                            email: res.user.email,
                            provider: 'facebook',
                            image: res.user.photoURL,
                            uid: res.user.uid
                        };
                        // Update user information
                        _this.userProvider.updateUserData(userObj).then(function () {
                            // Save user information in localstorage
                            _this.storageProvider.set(userObj.uid, userObj.name, userObj.email, userObj.image).then(function () {
                                observer.next();
                            }, function (error) {
                                observer.error(error);
                            });
                        });
                    })
                        .catch(function (err) {
                        observer.error(err);
                    });
                }
            });
        };
    }
    /***
     * --------------------------------------------------------------
     * Send Password Reset Request to User Email Address
     * --------------------------------------------------------------
     * @method    sendPasswordResetEmail
     * @param     email     User Current Email Address
     * @returns   { Observable }
     */
    AuthenticationProvider.prototype.sendPasswordResetEmail = function (email) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().sendPasswordResetEmail(email).then(function (res) {
                observer.next('We will email you a link which will allow you to reset your password.');
            }, function (error) {
                observer.error(error);
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Update Password
     * --------------------------------------------------------------
     * @method updatePassword  This function re-authenticate with user credentials
     * and then update user password.
     * @param oldPassword      User Current Password
     * @param newPassword      User New Password
     */
    AuthenticationProvider.prototype.updatePassword = function (oldPassword, newPassword) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            // Get current user ID
            var user = _this.afAuth.auth.currentUser;
            // Get credentials of current user
            var credentials = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].EmailAuthProvider.credential(user.email, oldPassword);
            // Prompt the user to re-provide their sign-in credentials
            user.reauthenticateWithCredential(credentials).then(function (res) {
                // Update user password
                user.updatePassword(newPassword).then(function (updateRes) {
                    resolve(updateRes);
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Update Email Address
     * --------------------------------------------------------------
     * @method updateEmail  This function re-authenticate with user credentials
     * and then update user email address.
     * @param oldEmail      User Current Email Address
     * @param password      User Current Password
     * @param newEmail      User New Email Address
     */
    AuthenticationProvider.prototype.updateEmail = function (oldEmail, password, newEmail) {
        var _this = this;
        // Get current user ID
        var user = this.afAuth.auth.currentUser;
        var promise = new Promise(function (resolve, reject) {
            // Get credentials of current user
            var credentials = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].EmailAuthProvider.credential(oldEmail, password);
            // Prompt the user to re-provide their sign-in credentials
            user.reauthenticateWithCredential(credentials).then(function (res) {
                // Update New Email
                user.updateEmail(newEmail).then(function (updateRes) {
                    var obj = {
                        uid: user.uid,
                        email: newEmail
                    };
                    // Update user data in effective fields
                    _this.userProvider.updateUserData(obj).then(function () {
                        resolve(updateRes);
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Logout
     * --------------------------------------------------------------
     * @method logout
     */
    AuthenticationProvider.prototype.logout = function () {
        var _this = this;
        this.storageProvider.remove()
            .then(function () {
            // Go back to the landing page
            _this.app.getRootNav().setRoot('LeadLandingPage');
            // Signout current user
            _this.afAuth.auth.signOut();
            // Reload information of current user
            _this.afAuth.auth.currentUser.reload();
        });
    };
    return AuthenticationProvider;
}());
AuthenticationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_7__providers_utils_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_8__shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_9__user_user__["a" /* UserProvider */]])
], AuthenticationProvider);

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a provider of camera image
 * File path - '../../../src/providers/image/image'
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import modules




var ImageProvider = (function () {
    function ImageProvider(camera, utilsProvider) {
        this.camera = camera;
        this.utilsProvider = utilsProvider;
        // Define Firebase storage ref
        this.storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
    }
    /**
     * Open gallery option of user device
     * @param uid Current userId
     * @param type Identify page name
     */
    ImageProvider.prototype.openGallery = function (uid, type) {
        var _this = this;
        var imageRef; // Will be set any kind of image reference path
        // Define promise
        var promise = new Promise(function (resolve, reject) {
            // Define camera options
            var cameraOptions = {
                quality: 50,
                destinationType: _this.camera.DestinationType.DATA_URL,
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                encodingType: _this.camera.EncodingType.JPEG,
                targetWidth: 500,
                targetHeight: 500,
                saveToPhotoAlbum: true
            };
            // Take a picture, or load one from the library.
            _this.camera.getPicture(cameraOptions).then(function (data) {
                // After pick one picture from the library, call a loader to process the next steps
                _this.utilsProvider.presentLoading();
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                _this.base64Image = "data:image/jpeg;base64," + data;
                // Create a custom filename
                var filename = Math.floor(Date.now() / 1000);
                // Check the type option
                // Get image reference on which we now put our image
                if (type === 'post') {
                    imageRef = _this.storageRef.child(uid + "/post/images/" + filename + ".jpg");
                }
                else if (type === 'profile') {
                    imageRef = _this.storageRef.child(uid + "/profile/images/" + filename + ".jpg");
                }
                // Use the putString() method that passing the base64 string and upload to firebase storage
                imageRef.putString(_this.base64Image, __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                    // On the image reference we call the getDownloadURL function for getting the image URL
                    imageRef.getDownloadURL().then(function (url) {
                        // Resolve this url to specific component
                        resolve(url);
                    });
                }, function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    /**
     * Open camera of user device
     * @param uid Current userId
     * @param type Identify page name
     */
    ImageProvider.prototype.openCamera = function (uid, type) {
        var _this = this;
        var imageRef; // Will be set any kind of image reference path
        // Define promise
        var promise = new Promise(function (resolve, reject) {
            // Define camera options
            var cameraOptions = {
                quality: 95,
                destinationType: _this.camera.DestinationType.DATA_URL,
                sourceType: _this.camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: _this.camera.EncodingType.JPEG,
                targetWidth: 500,
                targetHeight: 500,
                saveToPhotoAlbum: true
            };
            // Take a picture, or load one from the library.
            _this.camera.getPicture(cameraOptions).then(function (data) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                _this.base64Image = "data:image/jpeg;base64," + data;
                // Create a custom filename
                var filename = Math.floor(Date.now() / 1000);
                // Check the type option
                // Get image reference on which we now put our image
                if (type === 'post') {
                    imageRef = _this.storageRef.child(uid + "/post/images/" + filename + ".jpg");
                }
                else if (type === 'profile') {
                    imageRef = _this.storageRef.child(uid + "/profile/images/" + filename + ".jpg");
                }
                // Use the putString() method that passing the base64 string and upload to firebase storage
                imageRef.putString(_this.base64Image, __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                    // On the image reference we call the getDownloadURL function for getting the image URL
                    imageRef.getDownloadURL().then(function (url) {
                        // Resolve this url to specific component
                        resolve(url);
                    });
                }, function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                if (err) {
                    reject(err);
                }
            });
        });
        return promise;
    };
    return ImageProvider;
}());
ImageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* UtilsProvider */]])
], ImageProvider);

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(388);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_firebase__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_image_picker__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_admob_free__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_authentication_authentication__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_chat_chat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_friends_friends__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_user_user__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_connections_connections__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_post_post__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_utils_utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_utils_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_image_image__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_notification_notification__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_shared_shared__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_admob_free_admob_free__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_friends_location_map_friends_location_map__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/authentication/lead-landing/lead-landing.module#LeadLandingPageModule', name: 'LeadLandingPage', segment: 'lead-landing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/authentication/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/authentication/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/authentication/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat-contacts/chat-contacts.module#ChatContactsPageModule', name: 'ChatContactsPage', segment: 'chat-contacts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat-recent-history/chat-recent-history.module#ChatRecentHistoryPageModule', name: 'ChatRecentHistoryPage', segment: 'chat-recent-history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat-box/chat-box.module#ChatBoxPageModule', name: 'ChatBoxPage', segment: 'chat-box', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/followers/followers.module#FollowersPageModule', name: 'FollowersPage', segment: 'followers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/following/following.module#FollowingPageModule', name: 'FollowingPage', segment: 'following', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-request/friend-request.module#FriendRequestPageModule', name: 'FriendRequestPage', segment: 'friend-request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/discover-people/discover-people.module#DiscoverPeoplePageModule', name: 'DiscoverPeoplePage', segment: 'discover-people', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends-location-list/friends-location-list.module#FriendsLocationListPageModule', name: 'FriendsLocationListPage', segment: 'friends-location-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/email-change/email-change.module#EmailChangePageModule', name: 'EmailChangePage', segment: 'email-change', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends-location-map/friends-location-map.module#FriendsLocationMapPageModule', name: 'FriendsLocationMapPage', segment: 'friends-location-map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news-feed/news-feed.module#NewsFeedPageModule', name: 'NewsFeedPage', segment: 'news-feed', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'post', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/password-change/password-change.module#PasswordChangePageModule', name: 'PasswordChangePage', segment: 'password-change', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/share-location/share-location.module#ShareLocationPageModule', name: 'ShareLocationPage', segment: 'share-location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-public-profile/user-public-profile.module#UserPublicProfilePageModule', name: 'UserPublicProfilePage', segment: 'user-public-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/single-post/single-post.module#SinglePostPageModule', name: 'SinglePostPage', segment: 'single-post', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__config_firebase__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_20__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_utils_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_shared_shared__["a" /* SharedProvider */],
            __WEBPACK_IMPORTED_MODULE_23__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_post_post__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_connections_connections__["a" /* ConnectionsProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_friends_friends__["a" /* FriendsProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_utils_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_image_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_shared_shared__["a" /* SharedProvider */],
            __WEBPACK_IMPORTED_MODULE_31__providers_admob_free_admob_free__["a" /* AdmobFreeProvider */],
            __WEBPACK_IMPORTED_MODULE_32__providers_friends_location_map_friends_location_map__["a" /* FriendsLocationMapProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(334);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a provider of Shared.
 * File path - '../../../src/providers/utils/storage'
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageProvider = (function () {
    function StorageProvider(storage) {
        this.storage = storage;
    }
    StorageProvider.prototype.set = function (uid, name, email, image) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var object = { userId: uid, name: name, email: email, image: image };
            _this.storage.set('userInfo', JSON.stringify(object));
            resolve('success');
        });
        return promise;
    };
    StorageProvider.prototype.get = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.storage.get('userInfo').then(function (data) {
                resolve(JSON.parse(data));
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ;
    StorageProvider.prototype.remove = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.storage.remove('userInfo').then(function () {
                _this.storage.clear();
                resolve('success');
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    return StorageProvider;
}());
StorageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], StorageProvider);

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(32);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationProvider = (function () {
    function NotificationProvider(db, sharedProvider) {
        this.db = db;
        this.sharedProvider = sharedProvider;
        // Model of notification
        this._notiModel = {};
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
    NotificationProvider.prototype.createNotification = function (sender, receiver, type, postkey) {
        var _this = this;
        var fannedOutData = {};
        this._notiModel.key = this.db.database.ref().push().key; // Generate New Notification Key
        this._notiModel.sender = sender;
        this._notiModel.receiver = receiver;
        this._notiModel.type = type;
        this._notiModel.status = 'unread';
        this._notiModel.timestamp = new Date().getTime();
        if (postkey) {
            this._notiModel.postkey = postkey;
        }
        var promise = new Promise(function (resolve, reject) {
            // Update notification based on generated new notification key number `this._notiModel.key`
            fannedOutData["/notification/" + _this._notiModel.receiver + "/" + _this._notiModel.key] = _this._notiModel;
            _this.dbRef.ref.update(fannedOutData);
            // Call `increaseTotalCount` function to increase total notification count number.
            _this.increaseTotalCount(_this._notiModel.receiver);
            resolve('success');
        });
        return promise;
    };
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
    NotificationProvider.prototype.increaseTotalCount = function (userId) {
        this.db.database.ref("/notification/" + userId).child("total")
            .transaction(function (current) {
            return current = (current || 0) + 1;
        });
    };
    /**
     * --------------------------------------------------------------
     * Retrieve Total Unread Notification
     * --------------------------------------------------------------
     * @method totalUnreadNotification
     * @param userId      Current user ID
     * @return observer   Return total number of user unread notification
     */
    NotificationProvider.prototype.totalUnreadNotification = function (userId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.db.object("/notification/" + userId + "/total").valueChanges()
                .subscribe(function (data) {
                observer.next(data);
            }, function (err) {
                observer.error(err);
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Retrieve Total Friend Request
     * --------------------------------------------------------------
     * @param userId      Current user ID
     * @return observer   Return total number of user pending friend request
     */
    NotificationProvider.prototype.totalFriendRequest = function (userId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.db.list("/friend-request/received/" + userId).valueChanges()
                .subscribe(function (data) {
                observer.next(data.length);
            }, function (err) {
                observer.error(err);
            });
        });
    };
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
    NotificationProvider.prototype.makeTotalNotificationZero = function (userId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.db.database.ref("/notification/" + userId + "/total").set(0).then(function () {
                observer.next();
            }).catch(function (err) {
                observer.error(err);
            });
        });
    };
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
    NotificationProvider.prototype.getNotificationById = function (uid, lastkey) {
        var _this = this;
        var queryRef;
        var notificationList, newNotificationList = [];
        var count = 0;
        var promise = new Promise(function (resolve, reject) {
            if (lastkey) {
                queryRef = _this.db.list("/notification/" + uid, function (ref) { return ref.orderByKey().limitToLast(15).endAt(lastkey); });
            }
            else {
                queryRef = _this.db.list("/notification/" + uid, function (ref) { return ref.orderByKey().limitToLast(5); });
            }
            queryRef.valueChanges().subscribe(function (list) {
                notificationList = list.filter(function (n) { return n.hasOwnProperty('key'); });
                notificationList.forEach(function (element) {
                    _this.sharedProvider.getUserInfoByUserId(element.sender)
                        .then(function (user) {
                        count++; // Increase count
                        newNotificationList.push(Object.assign(element, { userName: user.name, userImage: user.image }));
                        if (count === list.length) {
                            resolve(newNotificationList);
                        }
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
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
    NotificationProvider.prototype.readNotification = function (uid, key) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/notification/" + uid + "/" + key).update({ status: 'read' })
                .then(function () {
                resolve('success');
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    return NotificationProvider;
}());
NotificationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* SharedProvider */]])
], NotificationProvider);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmobConfig; });
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents admob configuration.
 * File path - '../../src/config/admob'
 */
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents admob configuration.
 * File path - '../../src/config/admob'
 */ var AdmobConfig = {
    "banner": "ca-app-pub-xxxx",
    "interstitial": "ca-app-pub-xxxx"
};
//# sourceMappingURL=admob.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents firebase configuration.
 * File path - '../../src/config/firebase'
 */
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents firebase configuration.
 * File path - '../../src/config/firebase'
 */ var firebaseConfig = {
    "apiKey": "AIzaSyANegvAidYZl0iSXA2T_NHn82SV1m23p34",
    "authDomain": "thaitravel-296ea.firebaseapp.com",
    "databaseURL": "https://thaitravel-296ea.firebaseapp.com",
    "projectId": "thaitravel-296ea",
    "storageBucket": "thaitravel-296ea.appspot.com",
    "messagingSenderId": "30657075679"
};
//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_admob_free_admob_free__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storageProvider, admobFree) {
        var _this = this;
        this.storageProvider = storageProvider;
        this.admobFree = admobFree;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.isLoggedIn();
            // Show Interstitial Ad After 3 Minutes
            setTimeout(function () {
                _this.prepareInterstitial();
            }, 180000);
        });
    }
    /**
     * --------------------------------------------------------------
     * Check User Is Logged In or Not
     * --------------------------------------------------------------
     */
    MyApp.prototype.isLoggedIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageProvider.get().then(function (success) {
                            if (success) {
                                _this.rootPage = 'HomePage';
                            }
                            else {
                                _this.rootPage = 'LeadLandingPage';
                            }
                        }).catch(function (err) {
                            _this.rootPage = 'LeadLandingPage';
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Prepare and show admob Interstitial ad
     */
    MyApp.prototype.prepareInterstitial = function () {
        this.admobFree.prepareInterstitial();
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__providers_utils_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_admob_free_admob_free__["a" /* AdmobFreeProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friends_location_map_friends_location_map__ = __webpack_require__(168);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var FriendsProvider = (function () {
    function FriendsProvider(db, notificationProvider, sharedProvider, chatProvider, locationProvider) {
        this.db = db;
        this.notificationProvider = notificationProvider;
        this.sharedProvider = sharedProvider;
        this.chatProvider = chatProvider;
        this.locationProvider = locationProvider;
    }
    /**
     * --------------------------------------------------------------
     * Retrieve Chat Friends List
     * --------------------------------------------------------------
     * @method getChatFriends     This method will return the user's friend list
     * with the total unread chat message number of each contact.
     * @param userId              Current User ID
     *
     */
    FriendsProvider.prototype.getChatFriends = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var count, friendList, promise;
            return __generator(this, function (_a) {
                count = 0;
                friendList = [];
                promise = new Promise(function (resolve, reject) {
                    // Call shared proider `getUserFriendIds` method to get particular user friends Id
                    _this.sharedProvider.getUserFriendIds(userId).then(function (friends) {
                        if (friends) {
                            // Call chat provider `getChatThreadNotification` method to get all the friends of the
                            // Particular user unread chat notification number.
                            _this.chatProvider.getChatThreadNotification(userId).then(function (notifications) {
                                friends.forEach(function (element) {
                                    var findTargetUser = notifications.find(function (n) { return n.key === element; });
                                    // Call shared provider `getUserInfoByUserId` method to get particular user information
                                    _this.sharedProvider.getUserInfoByUserId(element).then(function (data) {
                                        count++;
                                        if (findTargetUser) {
                                            friendList.push(Object.assign(data, { unreadMsg: findTargetUser.value }));
                                        }
                                        else {
                                            friendList.push(data);
                                        }
                                        if (count === friends.length) {
                                            resolve(friendList);
                                        }
                                    });
                                });
                            });
                        }
                    });
                });
                return [2 /*return*/, promise];
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Retrieve List of Friends
     * --------------------------------------------------------------
     * @method getFriendList
     * @param uid   User ID
     */
    FriendsProvider.prototype.getFriendList = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var friendList, count, promise;
            return __generator(this, function (_a) {
                friendList = [];
                count = 0;
                promise = new Promise(function (resolve, reject) {
                    // By calling share provider `getUserFriendIds` method to get list of
                    // friends list from firebase database
                    _this.sharedProvider.getUserFriendIds(uid).then(function (friends) {
                        if (friends) {
                            if (friends.length > 0) {
                                friends.forEach(function (element) {
                                    // Call `this.sharedProvider.getUserInfoByUserId` to get particular user
                                    // profile information
                                    _this.sharedProvider.getUserInfoByUserId(element).then(function (data) {
                                        count++;
                                        friendList.push(Object.assign(data, { isFriends: true }));
                                        if (count === friends.length) {
                                            resolve(friendList);
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
                return [2 /*return*/, promise];
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Add Friend Request
     * --------------------------------------------------------------
     * @method addFriendRequest   This function Send friend requests to the user and target user received
     * friend request.
     * @param senderId            Current User ID/Sender ID
     * @param receiverId          Target User ID/Receiver ID
     */
    FriendsProvider.prototype.addFriendRequest = function (senderId, receiverId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            // Call `sendFriendRequest` function to add target user into the sender friend request list.
            _this.sendFriendRequest(senderId, receiverId);
            // Call `receivedFriendRequest` function to add current user into the target user friend request list.
            _this.receivedFriendRequest(senderId, receiverId);
            resolve('success');
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Send Friend Request
     * --------------------------------------------------------------
     * @method sendFriendRequest  This function add target user into the sender friend request list.
     * @param senderId            Current User ID/Sender ID
     * @param receiverId          Target User ID/Receiver ID
     */
    FriendsProvider.prototype.sendFriendRequest = function (senderId, receiverId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/friend-request/send/" + senderId).child(receiverId).set(true)
                .then(function (success) {
                resolve('success');
            });
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Receive Friend Request
     * --------------------------------------------------------------
     * @method receivedFriendRequest  This function add current user into the target user friend request list.
     * @param senderId                Current User ID/Sender ID
     * @param receiverId              Target User ID/Receiver ID
     */
    FriendsProvider.prototype.receivedFriendRequest = function (senderId, receiverId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/friend-request/received/" + receiverId).child(senderId).set(true)
                .then(function (success) {
                resolve('success');
            });
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Retrieve List of Friend Request
     * --------------------------------------------------------------
     * @method  getFriendRequestList
     * @param   currentUserId     User ID
     * @return  Promise           Return List of Friend Request
     */
    FriendsProvider.prototype.getFriendRequestList = function (currentUserId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var newFrndReqList, count, promise;
            return __generator(this, function (_a) {
                newFrndReqList = [];
                count = 0;
                promise = new Promise(function (resolve, reject) {
                    // By calling `this.getReceivedFriendRequestList` function to get list of
                    // received friend request list from firebase database
                    _this.getReceivedFriendRequestList(currentUserId).then(function (frndReqList) {
                        if (frndReqList) {
                            if (frndReqList.length > 0) {
                                frndReqList.forEach(function (element) {
                                    // Call `this.sharedProvider.getUserInfoByUserId` to get particular user
                                    // profile information
                                    _this.sharedProvider.getUserInfoByUserId(element).then(function (data) {
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
                return [2 /*return*/, promise];
            });
        });
    };
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
    FriendsProvider.prototype.confirmFriendRequest = function (targetUserId, currentUserId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            // By calling `this.sharedProvider.addUserInFollowingList` method twice,
            // Add current and target user's into their following list.
            _this.sharedProvider.addUserInFollowingList(currentUserId, targetUserId);
            _this.sharedProvider.addUserInFollowingList(targetUserId, currentUserId);
            // By calling `this.sharedProvider.increaseUserFollowingCount` method twice,
            // Increase current and target user's following count
            _this.sharedProvider.increaseUserFollowingCount(currentUserId);
            _this.sharedProvider.increaseUserFollowingCount(targetUserId);
            // By calling `this.sharedProvider.addUserInFollowerList` method twice,
            // Add current and target user's into their followers list.
            _this.sharedProvider.addUserInFollowerList(targetUserId, currentUserId);
            _this.sharedProvider.addUserInFollowerList(currentUserId, targetUserId);
            // By calling `this.sharedProvider.increaseUserFollowersCount` method twice,
            // Increase current and target user's followers count
            _this.sharedProvider.increaseUserFollowersCount(targetUserId);
            _this.sharedProvider.increaseUserFollowersCount(currentUserId);
            // Call `cancelFriendRequest` function to remove user from friend request list
            _this.cancelFriendRequest(targetUserId, currentUserId);
            // Call `addInFriendList` function twice, To add user's in friend list
            _this.addInFriendList(currentUserId, targetUserId);
            _this.addInFriendList(targetUserId, currentUserId);
            // Call `this.notificationProvider.createNotification` method to create 
            // following user notification
            _this.notificationProvider.createNotification(currentUserId, targetUserId, 'following');
            // Call `this.locationProvider.addFriendLocationById` method to add
            // both user's friend location
            _this.locationProvider.addFriendLocationById(currentUserId, targetUserId);
            // Resolve promise
            resolve('success');
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Unfriend or Remove User From Friend List
     * --------------------------------------------------------------
     * @method unFriend         This function will exclude the user from the user friend list and unfriend user.
     * @param currentUserId     Current User Id
     * @param targetUserId      Target User Id
     *
     */
    FriendsProvider.prototype.unFriend = function (currentUserId, targetUserId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            // Call shared provider `unfollowUser` method twice,
            // To remove user's from the user following list
            _this.sharedProvider.unfollowUser(currentUserId, targetUserId);
            _this.sharedProvider.unfollowUser(targetUserId, currentUserId);
            // Call `removeUserFromFriendList` function twice,
            // To remove user's from the user friend list
            _this.removeUserFromFriendList(currentUserId, targetUserId);
            _this.removeUserFromFriendList(targetUserId, currentUserId);
            // Call shared provider `removeNewsfeedPost` method twice,
            // To remove newsfeed posts from users newsfeed
            _this.sharedProvider.removeNewsfeedPost(currentUserId, targetUserId);
            _this.sharedProvider.removeNewsfeedPost(targetUserId, currentUserId);
            // Resolve promise
            resolve('Success');
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Add In Friend List
     * --------------------------------------------------------------
     * @param userId1 Any user ID
     * @param userId2 Any user ID
     */
    FriendsProvider.prototype.addInFriendList = function (userId1, userId2) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/users/" + userId1 + "/friends").child(userId2).set(true)
                .then(function (success) {
                resolve('success');
            });
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Remove Someone From Friend List
     * --------------------------------------------------------------
     * @method removeUserFromFriendList   This function remove target user from current user
     * friend list.
     * @param userId1   Current User ID
     * @param userId2   Target User ID
     */
    FriendsProvider.prototype.removeUserFromFriendList = function (userId1, userId2) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/users/" + userId1 + "/friends").child(userId2).remove()
                .then(function () {
                resolve('Removed');
            });
        });
        return promise;
    };
    ;
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
    FriendsProvider.prototype.cancelFriendRequest = function (userId1, userId2) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            // Remove friend request from receiver list
            _this.removeReceivedFriendRequest(userId1, userId2);
            // Remove friend request from sender list
            _this.removeSendFriendRequest(userId1, userId2);
            // Resolve promise
            resolve('Success');
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Remove user from received friend request list
     * --------------------------------------------------------------
     * @param userId1
     * @param userId2
     */
    FriendsProvider.prototype.removeReceivedFriendRequest = function (userId1, userId2) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/friend-request/received/" + userId2).child(userId1).remove()
                .then(function () {
                resolve('Removed');
            });
        });
        return promise;
    };
    ;
    /**
     * --------------------------------------------------------------
     * Remove user from send friend request list
     * --------------------------------------------------------------
     * @param userId1
     * @param userId2
     */
    FriendsProvider.prototype.removeSendFriendRequest = function (userId1, userId2) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/friend-request/send/" + userId1).child(userId2).remove()
                .then(function () {
                resolve('Removed');
            });
        });
        return promise;
    };
    ;
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
    FriendsProvider.prototype.getReceivedFriendRequestList = function (userId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var ref = _this.db.database.ref("/friend-request/received/" + userId);
            ref.on('value', function (snapshot) {
                if (snapshot.exists()) {
                    resolve(Object.keys(snapshot.val()));
                }
                else {
                    resolve(null);
                }
            });
        });
        return promise;
    };
    ;
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
    FriendsProvider.prototype.getSendFriendRequestList = function (userId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var ref = _this.db.database.ref("/friend-request/send/" + userId);
            ref.on('value', function (snapshot) {
                if (snapshot.exists()) {
                    resolve(Object.keys(snapshot.val()));
                }
                else {
                    resolve(null);
                }
            });
        });
        return promise;
    };
    ;
    return FriendsProvider;
}());
FriendsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationProvider */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatProvider */],
        __WEBPACK_IMPORTED_MODULE_5__friends_location_map_friends_location_map__["a" /* FriendsLocationMapProvider */]])
], FriendsProvider);

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friends_friends__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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






var ConnectionsProvider = (function () {
    function ConnectionsProvider(db, notificationProvider, sharedProvider, friendsProvider) {
        this.db = db;
        this.notificationProvider = notificationProvider;
        this.sharedProvider = sharedProvider;
        this.friendsProvider = friendsProvider;
    }
    /**
     * --------------------------------------------------------------
     * Discover Peoples/Suggested Users
     * --------------------------------------------------------------
     * @method getDiscoverPeoples
     *
     * @param userId      Current User ID
     * @return            Observable
     */
    ConnectionsProvider.prototype.getDiscoverPeoples = function (userId) {
        var _this = this;
        var filterUserList = [];
        var promise = new Promise(function (resolve, reject) {
            _this.getFollowingIds(userId).then(function (followingList) {
                _this.friendsProvider.getReceivedFriendRequestList(userId).then(function (receivedFriendReq) {
                    _this.friendsProvider.getSendFriendRequestList(userId).then(function (sendFriendLists) {
                        _this.sharedProvider.getUserFriendIds(userId).then(function (friendList) {
                            _this.sharedProvider.getRecentUserListById(userId).then(function (recentUserList) {
                                filterUserList = recentUserList;
                                if (followingList) {
                                    filterUserList = filterUserList.filter(function (e) { return !followingList.find(function (a) { return e.uid == a; }); });
                                }
                                if (receivedFriendReq) {
                                    filterUserList = filterUserList.filter(function (e) { return !receivedFriendReq.find(function (a) { return e.uid == a; }); });
                                }
                                if (sendFriendLists) {
                                    filterUserList = filterUserList.filter(function (e) { return !sendFriendLists.find(function (a) { return e.uid == a; }); });
                                }
                                if (friendList) {
                                    filterUserList = filterUserList.filter(function (e) { return !friendList.find(function (a) { return e.uid == a; }); });
                                }
                                resolve(filterUserList);
                            });
                        });
                    });
                });
            });
        });
        return promise;
    };
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
    ConnectionsProvider.prototype.followUser = function (targetUserId, currentUserId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // By calling shared provider `addUserInFollowingList` method,
                    // Add target user's inside the current user following list.
                    return [4 /*yield*/, this.sharedProvider.addUserInFollowingList(currentUserId, targetUserId)];
                    case 1:
                        // By calling shared provider `addUserInFollowingList` method,
                        // Add target user's inside the current user following list.
                        _a.sent();
                        // By calling shared provider `addUserInFollowerList` method,
                        // Add current user's inside the target user followers list.
                        return [4 /*yield*/, this.sharedProvider.addUserInFollowerList(currentUserId, targetUserId)];
                    case 2:
                        // By calling shared provider `addUserInFollowerList` method,
                        // Add current user's inside the target user followers list.
                        _a.sent();
                        // By calling shared provider `increaseUserFollowingCount` method,
                        // Increase current user's following count
                        return [4 /*yield*/, this.sharedProvider.increaseUserFollowingCount(currentUserId)];
                    case 3:
                        // By calling shared provider `increaseUserFollowingCount` method,
                        // Increase current user's following count
                        _a.sent();
                        // By calling shared provider `increaseUserFollowersCount` method,
                        // Increase target user's followers count
                        return [4 /*yield*/, this.sharedProvider.increaseUserFollowersCount(targetUserId)];
                    case 4:
                        // By calling shared provider `increaseUserFollowersCount` method,
                        // Increase target user's followers count
                        _a.sent();
                        // Call notification provider `createNotification` method
                        // to create a notification of following user
                        this.notificationProvider.createNotification(currentUserId, targetUserId, 'following');
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                                observer.next('success');
                                observer.complete();
                            })];
                }
            });
        });
    };
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
    ConnectionsProvider.prototype.getFollowingIds = function (uid) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/following/" + uid).on('value', function (snapshot) {
                if (snapshot.exists()) {
                    resolve(Object.keys(snapshot.val()));
                }
                else {
                    resolve(null);
                }
            });
        });
        return promise;
    };
    ;
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
    ConnectionsProvider.prototype.getFollowersIds = function (uid) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.database.ref("/followers/" + uid).on('value', function (snapshot) {
                if (snapshot.exists()) {
                    resolve(Object.keys(snapshot.val()));
                }
                else {
                    resolve(null);
                }
            });
        });
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Retrieve Following User's
     * --------------------------------------------------------------
     * @method getFollowingUsers
     * @param uid     User ID
     */
    ConnectionsProvider.prototype.getFollowingUsers = function (uid) {
        var _this = this;
        var users = [];
        var count = 0;
        var promise = new Promise(function (resolve, reject) {
            // Call `getFollowingIds` by current user ID and returning value will give
            // list of following user's ID.
            _this.getFollowingIds(uid).then(function (following) {
                if (following) {
                    if (following.length > 0) {
                        following.forEach(function (element) {
                            // Call shared provider `getUserInfoByUserId` method by user ID
                            // and this method return particular user details information.
                            _this.sharedProvider.getUserInfoByUserId(element).then(function (data) {
                                count++;
                                users.push(Object.assign(data, { isFollowing: true }));
                                if (count === following.length) {
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
        return promise;
    };
    /**
     * --------------------------------------------------------------
     * Retrieve Follower User's
     * --------------------------------------------------------------
     * @method getFollowersUser
     * @param uid     User ID
     */
    ConnectionsProvider.prototype.getFollowersUser = function (uid) {
        var _this = this;
        var customObj = { isFollowing: false };
        var users = [];
        var count = 0;
        var promise = new Promise(function (resolve, reject) {
            // Call `getFollowingIds` by current user ID and returning value will give
            // list of following user's ID.
            _this.getFollowingIds(uid).then(function (following) {
                // Call `getFollowersIds` by current user ID and returning value will give
                // list of followers user's ID.
                _this.getFollowersIds(uid).then(function (followers) {
                    if (followers) {
                        if (followers.length > 0) {
                            followers.forEach(function (element) {
                                // Call shared provider `getUserInfoByUserId` method by user ID
                                // and this method return particular user details information.
                                _this.sharedProvider.getUserInfoByUserId(element).then(function (data) {
                                    if (following) {
                                        var findFollowingUser = following.find(function (n) { return n === element; });
                                        if (findFollowingUser) {
                                            customObj.isFollowing = true;
                                        }
                                        else {
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
    };
    return ConnectionsProvider;
}());
ConnectionsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationProvider */],
        __WEBPACK_IMPORTED_MODULE_4__shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_5__friends_friends__["a" /* FriendsProvider */]])
], ConnectionsProvider);

//# sourceMappingURL=connections.js.map

/***/ })

},[383]);
//# sourceMappingURL=main.js.map