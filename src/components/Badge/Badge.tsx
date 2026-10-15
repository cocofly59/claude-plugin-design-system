import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../internal/cx";
import type { Tone } from "../../internal/tone";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** neutral, info, accent (a recommendation), waiting (for the user), success or danger. */
  tone?: Tone;
  children: ReactNode;
}

/** A small label attached to an item, such as "Recommended" or "Revised". */
export function Badge({ tone = "neutral", className, children, ...rest }: BadgeProps) {
  return (
    <span className={cx("cpds-badge", `cpds-tone--${tone}`, className)} {...rest}>
      {children}
    </span>
  );
}
