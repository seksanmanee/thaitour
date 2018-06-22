export interface Post {
  postkey: string;
  text: string;
  featureImage: string;
  featureVideo: string;
  userImage: string;
  userName: string;
  uid: string;
  isLike: Boolean;
  status: Boolean;
  createdDate: Date;
  updatedDate: Date;
}