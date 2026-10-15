import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../internal/cx";
import type { Tone } from "../../internal/tone";

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** waiting: the user has to act; info: someone else is working; success: done; neutral: closed or idle; danger: failed. */
  tone: Tone;
  children: ReactNode;
}

/** The status of an item or of a view, such as "Waiting for you" or "Confirmed". */
export function StatusBadge({ tone, className, children, ...rest }: StatusBadgeProps) {
  return (
    <span className={cx("cpds-status-badge", `cpds-tone--${tone}`, className)} {...rest}>
      {children}
    </span>
  );
}
