import type { ComponentProps } from "react";
import { cx } from "../../internal/cx";
import { Icon, type IconName } from "../Icon/Icon";

export type IconButtonVariant = "primary" | "secondary" | "ghost";

export interface IconButtonProps extends Omit<ComponentProps<"button">, "children" | "aria-label"> {
  icon: IconName;
  /** The action's name: read by assistive technologies and shown as a tooltip. */
  label: string;
  variant?: IconButtonVariant;
}

export function IconButton({ icon, label, variant = "ghost", type = "button", title, className, ...rest }: IconButtonProps) {
  return (
    <button type={type} aria-label={label} title={title ?? label} className={cx("cpds-icon-button", `cpds-icon-button--${variant}`, className)} {...rest}>
      <Icon name={icon} />
    </button>
  );
}
