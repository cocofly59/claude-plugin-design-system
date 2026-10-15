import { cx } from "../../internal/cx";
import type { IconGlyph } from "./icons";

export type IconSize = "sm" | "md" | "lg";

export interface IconProps {
  /** One icon of the set, such as iconSend. */
  icon: IconGlyph;
  /** sm 14, md 16, lg 20. */
  size?: IconSize;
  /** Names the icon for assistive technologies; without it, the icon is decorative and hidden from them. */
  label?: string;
  className?: string;
}

export function Icon({ icon, size = "md", label, className }: IconProps) {
  const Glyph = icon.component;
  const naming = label === undefined ? { "aria-hidden": true } : { role: "img", "aria-label": label };
  return <Glyph className={cx("cpds-icon", `cpds-icon--${size}`, className)} strokeWidth={1.75} focusable="false" data-icon={icon.name} {...naming} />;
}
