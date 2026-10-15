import type { ReactNode } from "react";
import { cx } from "../../internal/cx";
import { Icon } from "../Icon/Icon";
import { type IconGlyph, iconCircleAlert, iconCircleCheck, iconClock, iconInfo } from "../Icon/icons";

export type BannerVariant = "info" | "status";
export type BannerTone = "neutral" | "info" | "waiting" | "success" | "danger";

export interface BannerProps {
  /** info: a message in a tinted box; status: a short status line, such as "Draft saved". */
  variant?: BannerVariant;
  tone?: BannerTone;
  /** Replaces the tone's icon. */
  icon?: IconGlyph;
  className?: string;
  children: ReactNode;
}

const toneIcons: Record<BannerTone, IconGlyph> = {
  neutral: iconInfo,
  info: iconInfo,
  waiting: iconClock,
  success: iconCircleCheck,
  danger: iconCircleAlert,
};

/** A message about the state of a view or an item, announced politely to assistive technologies. */
export function Banner({ variant = "info", tone = "info", icon, className, children }: BannerProps) {
  return (
    <div role="status" className={cx("cpds-banner", `cpds-banner--${variant}`, `cpds-banner-tone--${tone}`, variant === "info" && `cpds-tone--${tone}`, className)}>
      <Icon icon={icon ?? toneIcons[tone]} size={variant === "status" ? "sm" : "md"} />
      <span>{children}</span>
    </div>
  );
}
