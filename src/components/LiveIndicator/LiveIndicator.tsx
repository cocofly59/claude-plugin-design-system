import { cx } from "../../internal/cx";

export type Connection = "live" | "offline";

export interface LiveIndicatorProps {
  /** live: the page receives updates; offline: it lost its connection. */
  connection: Connection;
  /** The visible text; "Live" or "Offline" by default. */
  label?: string;
  className?: string;
}

const defaultLabels: Record<Connection, string> = { live: "Live", offline: "Offline" };

/** Whether the page is receiving live updates: a dot and a word. */
export function LiveIndicator({ connection, label, className }: LiveIndicatorProps) {
  return (
    <span className={cx("cpds-live", `cpds-live--${connection}`, className)} role="status">
      <span className="cpds-live__dot" aria-hidden="true" />
      {label ?? defaultLabels[connection]}
    </span>
  );
}
