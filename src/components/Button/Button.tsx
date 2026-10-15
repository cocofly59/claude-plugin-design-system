import type { ComponentProps, MouseEvent, ReactNode } from "react";
import { cx } from "../../internal/cx";
import { Icon, type IconName } from "../Icon/Icon";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps extends Omit<ComponentProps<"button">, "children"> {
  /** primary: the main action of a view; secondary: other actions; ghost: light actions in accent text. */
  variant?: ButtonVariant;
  /** An icon before the label. */
  icon?: IconName;
  /** While set, the action is running: a spinner replaces the icon, the button stays focusable and ignores clicks. */
  loading?: boolean;
  children: ReactNode;
}

export function Button({ variant = "secondary", icon, loading = false, type = "button", className, onClick, children, ...rest }: ButtonProps) {
  const click = (event: MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };
  return (
    <button
      type={type}
      className={cx("cpds-button", `cpds-button--${variant}`, className)}
      aria-busy={loading || undefined}
      aria-disabled={loading || rest["aria-disabled"]}
      data-loading={loading || undefined}
      onClick={click}
      {...rest}
    >
      {loading ? <Icon name="loader" className="cpds-button__spinner" /> : icon !== undefined && <Icon name={icon} />}
      <span>{children}</span>
    </button>
  );
}
