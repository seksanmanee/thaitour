export interface CommentModel {
  commentKey: string;
  text: string;
  commentOwner: string;
  postkey: string;
  createdDate: Date;
  updatedDate: Date;
}