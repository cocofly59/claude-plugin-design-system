import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../internal/cx";

export interface ProgressBarProps {
  value: number;
  max: number;
  /** Names the bar for assistive technologies, such as "Tasks done". */
  label: string;
  /** A short text after the bar, such as "2/4". */
  valueText?: ReactNode;
  className?: string;
}

/** How far a task has gone: a short bar, filled in the running tone, in the success tone once complete. */
export function ProgressBar({ value, max, label, valueText, className }: ProgressBarProps) {
  const ratio = max > 0 ? Math.min(Math.max(value / max, 0), 1) : 0;
  const complete = max > 0 && value >= max;
  return (
    <span className={cx("cpds-progress", className)} data-complete={complete || undefined}>
      <span
        className="cpds-progress__track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{ "--cpds-progress-ratio": ratio } as CSSProperties}
      >
        <span className="cpds-progress__fill" />
      </span>
      {valueText !== undefined && <span className="cpds-progress__text">{valueText}</span>}
    </span>
  );
}
