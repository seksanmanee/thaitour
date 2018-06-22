/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of profile introduction
 * File path - '../../../../src/pages/components/user-profile-introduction/user-profile-introduction'
 */
import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';
import { StorageProvider } from '../../providers/utils/storage';
import { ConnectionsProvider } from '../../providers/connections/connections';
import { UserProvider } from '../../providers/user/user';
import { FriendsProvider } from '../../providers/friends/friends';
import { SharedProvider } from '../../providers/shared/shared';
import { User } from '../../models/user';

@Component({
  selector: 'user-profile-introduction',
  templateUrl: 'user-profile-introduction.html'
})
export class UserProfileIntroductionComponent {

  private user = {} as User;
  userId: any;
  currentUserId: any;
  friends: any = [];

  constructor(
    private userProvider: UserProvider,
    public modalCtrl: ModalController,
    private storageProvider: StorageProvider,
    private navParams: NavParams,
    private connectionsProvider: ConnectionsProvider,
    private friendsProvider: FriendsProvider,
    private sharedProvider: SharedProvider) { }

  /***
   * Do any initialization
   */
  ngOnInit() {
    this.getParamsId();
    this.loadStorageData();
  }

  /**
   * --------------------------------------------------------------
   * Get & Set userId from navParams
   * --------------------------------------------------------------
   */
  getParamsId() {
    if (this.navParams.get('userId')) {
      this.userId = this.navParams.get('userId');
    }
  }

  /**
   * --------------------------------------------------------------
   * Get LocalStorage Data
   * --------------------------------------------------------------
   * @method loadStorageData This function get data from local storage
   */
  loadStorageData() {
    this.storageProvider.get().then((success: any) => {
      this.currentUserId = success.userId;
      this.getUserInfo();
    });
  }

  /**
   * --------------------------------------------------------------
   * Get user information
   * --------------------------------------------------------------
   * @method getUserInfo This function check userId is curent or
   * someone else's ID. Based on the userId It's call `this.loadUserInfoByUserId`
   * function to load target user profile information.
   */
  async getUserInfo() {
    if (this.userId) {
      await this.loadUserInfoByUserId(this.userId);
    } else {
      await this.loadUserInfoByUserId(this.currentUserId);
    }
  }

  /**
   * --------------------------------------------------------------
   * Load User Information
   * --------------------------------------------------------------
   * @method loadUserInfoByUserId  This function load information of particular User.
   * @param userId Any user Id
   * 
   * By calling `this.userProvider.getTargetUserInfos` method It's return object of
   * particular user profile information.
   */
  async loadUserInfoByUserId(userId) {
    try {
      await this.userProvider.getTargetUserInfos(userId, this.currentUserId).then((result) => {
        result.subscribe(info => {
          if (info) {

            // Assign user infos by `this.user`
            this.user = info;

            // Assign user friends by `this.friends`
            if (this.user.friends) {
              this.friends = Object.keys(this.user.friends);
            }
          }
        });
      }).catch(err => {
        console.log(err)
      });
    }
    catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Open Edit Profile Page
   * --------------------------------------------------------------
   */
  gotoEditProfile() {
    this.modalCtrl.create('EditProfilePage', { userInfo: this.user }).present();
  }

  /**
   * --------------------------------------------------------------
   * Follow User
   * --------------------------------------------------------------
   * @method followUser
   * This function works to follow the user and call a connection provider `followUser` method by passing
   * two params `this.user.uid` and `this.currentUserId` here, `this.user.uid` is any user ID would like to
   * follow and `this.currentUserId` is current user ID.
   * 
   */
  async followUser() {
    try {
      await this.connectionsProvider.followUser(this.user.uid, this.currentUserId)
        .then(success => {
          success.subscribe(() => {
            this.user.isFollowing = true;
          });
        }).catch(err => {

        });
    }
    catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Unfollow User
   * --------------------------------------------------------------
   * @method unfollowUser
   * This function works to unfollow the user and call a shared provider `unfollowUser` method by passing
   * two params `this.currentUserId` and `this.user.uid` here, `this.user.uid` is any user ID would like to
   * unfollow and `this.currentUserId` is current user ID.
   * 
   */
  async unfollowUser() {
    try {
      await this.sharedProvider.unfollowUser(this.currentUserId, this.user.uid)
        .then(success => {
          this.user.isFollowing = false;
        });
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * --------------------------------------------------------------
   * Send Friend Request
   * --------------------------------------------------------------
   * @method sendFriendRequest
   * This function is used to send Friend Requests. Call a friends provider `addFriendRequest` method by passing
   * two params `this.currentUserId` and `this.user.uid` here, `this.user.uid` is any user ID would like to
   * send friend request and `this.currentUserId` is current user ID.
   */
  async sendFriendRequest() {
    try {
      await this.friendsProvider.addFriendRequest(this.currentUserId, this.user.uid)
        .then(success => {
          if (success) {
            this.user.isSendFrndReq = true;
            this.user.isFriend = false;
          }
        });
    }
    catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Cancel Friend Request
   * --------------------------------------------------------------
   * @method cancelFrndReq
   * This function works to send a friend request to cancel. Call a friends provider `cancelFriendRequest` method by passing
   * two params `this.currentUserId` and `this.user.uid` here, `this.user.uid` is any user ID would like to
   * cancel friend request and `this.currentUserId` is current user ID.
   */
  async cancelFrndReq() {
    try {
      await this.friendsProvider.cancelFriendRequest(this.currentUserId, this.user.uid)
        .then(success => {
          if (success) {
            this.user.isFriend = false;
            this.user.isSendFrndReq = false;
          }
        });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Accept Friend Request
   * --------------------------------------------------------------
   * @method acceptFriendRequest
   * This function works to accept user friend request. Call a friends provider `confirmFriendRequest` method by passing
   * two params `this.user.uid` and `this.currentUserId`. here, `this.user.uid` is any user ID would like to
   * accept friend request and `this.currentUserId` is current user ID.
   */
  async acceptFriendRequest() {
    try {
      await this.friendsProvider.confirmFriendRequest(this.user.uid, this.currentUserId)
        .then(success => {
          if (success) {
            this.user.isReceivedFrndReq = false;
            this.user.isFriend = true;
          }
        });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Unfriend User
   * --------------------------------------------------------------
   * @method unFriend
   * This function works to unfriend or remove user from user friend list. Call a friends provider
   *  `unFriend` method by two params `this.currentUserId` and `this.user.uid`. here, `this.user.uid`
   * is any user ID would like to unfriend and `this.currentUserId` is current user ID.
   */
  async unFriend() {
    try {
      await this.friendsProvider.unFriend(this.currentUserId, this.user.uid)
        .then(success => {
          if (success) {
            this.user.isReceivedFrndReq = false;
            this.user.isFriend = false;
            this.user.isFollowing = false;
          }
        });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Open User Following Page
   * --------------------------------------------------------------
   * @method gotoFollowingPage
   * This function create a modal to open user following page, Where user can
   * manage the following user's
   */
  gotoFollowingPage() {
    if (this.currentUserId === this.user.uid) {
      this.modalCtrl.create('FollowingPage', { userId: this.user.uid }).present()
    }
  }

  /**
   * --------------------------------------------------------------
   * Open User Followers Page
   * --------------------------------------------------------------
   * @method gotoFollowersPage
   * This function create a modal to open user followers page, Where user can
   * manage the Follower's user's
   */
  gotoFollowersPage() {
    if (this.currentUserId === this.user.uid) {
      this.modalCtrl.create('FollowersPage', { userId: this.user.uid }).present()
    }
  }

  /**
   * --------------------------------------------------------------
   * Open User Friends Page
   * --------------------------------------------------------------
   * @method gotoFriendsPage
   * This function create a modal to open user friends page, Where user can
   * manage the friends user's
   */
  gotoFriendsPage(uid) {
    if (this.currentUserId === this.user.uid) {
      this.modalCtrl.create('FriendsPage', { userId: this.user.uid }).present()
    }
  }
}
