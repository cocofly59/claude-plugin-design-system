import type { ReactNode } from "react";
import { cx } from "../../internal/cx";

export interface SwitchOption<T extends string> {
  id: T;
  label: ReactNode;
}

export interface SegmentedControlProps<T extends string> {
  options: readonly SwitchOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /** Names the group for assistive technologies. */
  label: string;
  /** Takes the width of its container, its options sharing it equally. */
  fullWidth?: boolean;
  className?: string;
}

/** A choice between a few views, side by side in one track, the selected one filled; no option changes size. */
export function SegmentedControl<T extends string>({ options, value, onChange, label, fullWidth = false, className }: SegmentedControlProps<T>) {
  return (
    <div role="group" aria-label={label} className={cx("cpds-segmented", fullWidth && "cpds-segmented--full-width", className)}>
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className="cpds-segmented__option"
          aria-pressed={option.id === value}
          onClick={() => {
            onChange(option.id);
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
