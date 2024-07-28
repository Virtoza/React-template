// src/components/Icon.tsx
import React from "react";
import * as icons from "lucide-react";
import { IIcon } from "../../types/icon.types";

const Icon: React.FC<IIcon> = ({
  name,
  color = "currentColor",
  size = 24,
  className,
  strokeWidth = 2,
}) => {
  const LucideIcon = icons[name] as React.ElementType;

  if (!LucideIcon) {
    console.error(`Icon "${name}" does not exist in lucide-react.`);
    return null;
  }

  return (
    <LucideIcon
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
};

export default Icon;
