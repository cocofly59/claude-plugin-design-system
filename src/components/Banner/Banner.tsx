import type { ReactNode } from "react";
import { cx } from "../../internal/cx";
import { Icon } from "../Icon/Icon";
import { type IconGlyph, iconCircleAlert, iconCircleCheck, iconClock, iconInfo, iconX } from "../Icon/icons";
import { IconButton } from "../IconButton/IconButton";

export type BannerVariant = "info" | "status";
export type BannerTone = "neutral" | "info" | "waiting" | "success" | "danger";

export interface BannerProps {
  /** info: a message in a tinted box; status: a short status line, such as "Draft saved". */
  variant?: BannerVariant;
  tone?: BannerTone;
  /** Replaces the tone's icon. */
  icon?: IconGlyph;
  /** A title before the message, in a heavier weight. */
  title?: ReactNode;
  /** Controls at the end of an info banner, such as a button that opens what the message is about. */
  actions?: ReactNode;
  /** Shows a dismiss button at the end of an info banner. */
  onDismiss?: () => void;
  /** The dismiss button's name; "Dismiss" by default. */
  dismissLabel?: string;
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
export function Banner({ variant = "info", tone = "info", icon, title, actions, onDismiss, dismissLabel = "Dismiss", className, children }: BannerProps) {
  const controls = variant === "info" && (actions !== undefined || onDismiss !== undefined);
  const message = (
    <>
      {title !== undefined && <strong className="cpds-banner__title">{title}</strong>}
      {title !== undefined && " "}
      {children}
    </>
  );
  // With controls, only the message is the live region, so that the buttons' names are not announced with it.
  return (
    <div
      role={controls ? undefined : "status"}
      className={cx("cpds-banner", `cpds-banner--${variant}`, `cpds-banner-tone--${tone}`, variant === "info" && `cpds-tone--${tone}`, controls && "cpds-banner--with-controls", className)}
    >
      <Icon icon={icon ?? toneIcons[tone]} size={variant === "status" ? "sm" : "md"} />
      <span role={controls ? "status" : undefined} className="cpds-banner__message">
        {message}
      </span>
      {controls && (
        <span className="cpds-banner__controls">
          {actions}
          {onDismiss !== undefined && <IconButton icon={iconX} label={dismissLabel} variant="ghost" onClick={onDismiss} />}
        </span>
      )}
    </div>
  );
}
