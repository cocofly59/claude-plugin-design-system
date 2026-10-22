import { cx } from "../../internal/cx";

export interface ChangeBarProps {
  added: number;
  removed: number;
  /** The number of cells; five by default. */
  cells?: number;
  className?: string;
}

/** The share of lines added and removed, as a row of cells; decorative, so the counts must be given as text too. */
export function ChangeBar({ added, removed, cells = 5, className }: ChangeBarProps) {
  const total = added + removed;
  const red = removed > 0 ? Math.max(1, Math.round((removed / total) * cells)) : 0;
  const green = added > 0 ? Math.max(1, cells - red) : 0;
  const removedCells = Math.min(red, cells - green);
  return (
    <span className={cx("cpds-change-bar", className)} aria-hidden="true">
      {Array.from({ length: cells }, (_, index) => (
        <span key={index} className="cpds-change-bar__cell" data-change={index < green ? "added" : index < green + removedCells ? "removed" : undefined} />
      ))}
    </span>
  );
}
