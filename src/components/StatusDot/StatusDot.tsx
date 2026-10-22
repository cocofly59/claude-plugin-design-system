import { cx } from "../../internal/cx";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";

/**
 * The state a dot shows. info: running; queued: waiting for its turn; waiting: for the user; success: done;
 * danger: failed; neutral: ready, not started; inactive: blocked or out of play.
 */
export type DotStatus = "neutral" | "info" | "queued" | "waiting" | "success" | "danger" | "inactive";

export interface StatusDotProps {
  status: DotStatus;
  /** The state's name, read by assistive technologies; without it, the dot is decorative. */
  label?: string;
  className?: string;
}

/** A small dot in the tone of a state, filled for an active state, outlined for one that has not started. */
export function StatusDot({ status, label, className }: StatusDotProps) {
  return (
    <span className={cx("cpds-status-dot", `cpds-status-dot--${status}`, className)} aria-hidden={label === undefined ? true : undefined}>
      {label !== undefined && <VisuallyHidden>{label}</VisuallyHidden>}
    </span>
  );
}
