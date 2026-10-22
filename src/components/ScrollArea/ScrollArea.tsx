import type { ReactNode } from "react";
import { cx } from "../../internal/cx";

export type ScrollAxis = "vertical" | "horizontal" | "both";

export interface ScrollAreaProps {
  /** Names the region for assistive technologies; it is focusable so that the keyboard can scroll it. */
  label: string;
  /** The directions the content may scroll in; vertical by default. */
  axis?: ScrollAxis;
  className?: string;
  children: ReactNode;
}

/** A region that scrolls its content within itself, with thin scrollbars, reachable and scrollable by keyboard. */
export function ScrollArea({ label, axis = "vertical", className, children }: ScrollAreaProps) {
  return (
    <div role="region" aria-label={label} tabIndex={0} className={cx("cpds-scroll-area", `cpds-scroll-area--${axis}`, className)}>
      {children}
    </div>
  );
}
