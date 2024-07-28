import * as icons from "lucide-react";
export type IconName = keyof typeof icons;

export interface IIcon {
  name: IconName;
  color?: string;
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}
