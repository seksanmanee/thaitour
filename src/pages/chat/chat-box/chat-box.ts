/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of chat box
 * File path - '../../../../src/pages/chat/chat-box/chat-box'
 */

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, ViewController, Content, ModalController } from 'ionic-angular';
import { ChatProvider } from '../../../providers/chat/chat';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { StorageProvider } from '../../../providers/utils/storage';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-chat-box',
  templateUrl: 'chat-box.html'
})
export class ChatBoxPage {

  @ViewChild(Content) content: Content;

  // User Text Message
  textMsg: any;

  // Current User Information
  currentUserInfo: any;

  // Receiver Information
  receiverInfo: any;

  // Chat Thread Reference
  chatRef: AngularFireList<any>;

  // All Chat Messages
  chatMessages: Observable<any[]>;

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private chatProvider: ChatProvider,
    public modalCtrl: ModalController,
    private afDb: AngularFireDatabase,
    private storageProvider: StorageProvider) { }

  /** Do any initialization */
  ngOnInit() {
    this.getReceiverInformation().then(() => {
      this.loadStorageData().then(() => {
        this.getChetMessages();
      });
    });
  }

  /**
   * --------------------------------------------------------------
   * Get & Set Receiver Information from navParams
   * --------------------------------------------------------------
   */
  async getReceiverInformation() {
    if (this.navParams.get('receiver')) {
      this.receiverInfo = this.navParams.get('receiver');
    }
  }

  /**
   * --------------------------------------------------------------
   * Get Localstorage User Data
   * --------------------------------------------------------------
   * @method loadStorageData This function get user information from localstorage
   */
  async loadStorageData() {
    await this.storageProvider.get().then((success: any) => {
      this.currentUserInfo = success;
    });
  }

  /**
   * --------------------------------------------------------------
   * Get All Chat Messages
   * --------------------------------------------------------------
   * @method getChetMessages
   * This function call chat provider `getChatRef` method by passing Current UserID and
   * receiver UserId and retrieve all chat messages conversation for these users.
   */
  getChetMessages() {
    this.chatProvider.getChatRef(this.currentUserInfo.userId, this.receiverInfo.uid)
      .then((chatRef: any) => {
        this.chatRef = this.afDb.list(`/chats/${chatRef}`);
        this.chatMessages = this.chatRef.valueChanges();
        this.chatMessages.subscribe();
        this.readAllMessages();
        this.scrollToBottom();
      });
  }

  /***
   * --------------------------------------------------------------
   * Lifecycle Event - ionViewDidEnter()
   * --------------------------------------------------------------
   * 
   * Fired when entering a page, after it becomes the active page.
   */
  ionViewDidEnter() {
    this.chatProvider.totalUnreadChat(this.currentUserInfo.userId);
    this.scrollToBottom();
  }

  /**
   * --------------------------------------------------------------
   * Scroll To Bottom Page
   * --------------------------------------------------------------
   */
  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  /**
   * --------------------------------------------------------------
   * Send Message
   * --------------------------------------------------------------
   * @method sendMessage
   */
  sendMessage() {
    if (this.textMsg) {
      let newChat = {
        timestamp: new Date().getTime(),
        from: this.currentUserInfo.userId,
        to: this.receiverInfo.uid,
        message: this.textMsg,
        type: 'message'
      };

      this.chatRef.push(newChat);

      // Call `increaseNotification` method from chat provider to increase notification
      this.chatProvider.increaseNotification(this.receiverInfo.uid, this.currentUserInfo.userId);

      // Call `updateChatHistory` method from chat provider to update chat history
      this.chatProvider.updateChatHistory(this.currentUserInfo.userId, this.receiverInfo.uid);

      this.textMsg = ""; // Make input box to null

      this.scrollToBottom();
    }
  };

  /**
   * --------------------------------------------------------------
   * Read All Message
   * --------------------------------------------------------------
   * @method readAllMessages      This function will call when user enters on this
   * page and automatically read all received chat messges.
   */
  readAllMessages() {
    this.chatProvider.readChatMsg(this.currentUserInfo.userId, this.receiverInfo.uid);
  }

  /**
   * --------------------------------------------------------------
   * Open Particular User Profile
   * --------------------------------------------------------------
   * @method gotoUserProfile
   * 
   * This function create a modal to open particular user public profile.
   * 
   * @param userId
   */
  gotoUserProfile(userId) {
    this.modalCtrl.create('UserPublicProfilePage', { userId: userId }).present();
  }

  /**
   * --------------------------------------------------------------
   * On Focus
   * --------------------------------------------------------------
   */
  onFocus() {
    this.content.resize();
    this.scrollToBottom();
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
