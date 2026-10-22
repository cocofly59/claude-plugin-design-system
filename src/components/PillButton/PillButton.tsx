import type { ComponentProps, ReactNode } from "react";
import { cx } from "../../internal/cx";
import type { Tone } from "../../internal/tone";
import { Icon } from "../Icon/Icon";
import type { IconGlyph } from "../Icon/icons";

export type PillButtonVariant = "tinted" | "outline";

export interface PillButtonProps extends Omit<ComponentProps<"button">, "children"> {
  tone?: Tone;
  /** tinted: the tone's background; outline: the surface, edged in the tone. */
  variant?: PillButtonVariant;
  icon?: IconGlyph;
  children: ReactNode;
}

/** A compact rounded button for a small count or a short action, such as "+2" or "3 hidden". */
export function PillButton({ tone = "neutral", variant = "tinted", icon, type = "button", className, children, ...rest }: PillButtonProps) {
  return (
    <button type={type} className={cx("cpds-pill-button", `cpds-pill-button--${variant}`, `cpds-pill-button-tone--${tone}`, variant === "tinted" && `cpds-tone--${tone}`, className)} {...rest}>
      {icon !== undefined && <Icon icon={icon} size="sm" />}
      {children}
    </button>
  );
}
