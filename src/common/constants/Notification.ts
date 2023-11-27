import { NotificationState } from "@/common/types";

export const enum NotificationType {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
  WARNING = "warning",
}

export const enum NotificationDelay {
  DEFAULT = 2000,
}

export const notificationInfoDefaultTemplate: Omit<NotificationState, "title"> = {
  type: NotificationType.INFO,
  delay: NotificationDelay.DEFAULT,
};
