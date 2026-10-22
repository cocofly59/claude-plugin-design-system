import type { ReactNode } from "react";
import { cx } from "../../internal/cx";

export interface VisuallyHiddenProps {
  className?: string;
  children: ReactNode;
}

/** Text read by assistive technologies and never drawn, such as the full name of a compact item. */
export function VisuallyHidden({ className, children }: VisuallyHiddenProps) {
  return <span className={cx("cpds-visually-hidden", className)}>{children}</span>;
}
