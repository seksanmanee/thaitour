export interface User {
  name?: string;
  email?: string;
  password?: string;
  image?: string;
  website?: string;
  bio?: string;
  birthday?: string;
  location?: string;
  phone?: string;
  uid?:string;
  isFollowing?: Boolean;
  isFriend?: Boolean;
  isReceivedFrndReq?: Boolean;
  isSendFrndReq?: Boolean;
  isShareLocation?: Boolean;
  friends?: any;
}
