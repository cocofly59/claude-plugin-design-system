import type { ComponentProps } from "react";
import { cx } from "../../internal/cx";
import { Icon } from "../Icon/Icon";
import type { IconGlyph } from "../Icon/icons";

export type IconButtonVariant = "primary" | "secondary" | "ghost";

export interface IconButtonProps extends Omit<ComponentProps<"button">, "children" | "aria-label"> {
  icon: IconGlyph;
  /** The action's name: read by assistive technologies and shown as a tooltip. */
  label: string;
  variant?: IconButtonVariant;
}

export function IconButton({ icon, label, variant = "ghost", type = "button", title, className, ...rest }: IconButtonProps) {
  return (
    <button type={type} aria-label={label} title={title ?? label} className={cx("cpds-icon-button", `cpds-icon-button--${variant}`, className)} {...rest}>
      <Icon icon={icon} />
    </button>
  );
}
