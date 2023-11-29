import { NotificationType } from "@/common/constants";

export type NotificationState = {
  title: string;
  delay: number;
  type: NotificationType;
};
