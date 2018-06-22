export interface NotificationModel {
  key: string;
  sender: string;
  receiver: string;
  type: string;
  timestamp: Number;
  postkey?: string;
  status: string;
}