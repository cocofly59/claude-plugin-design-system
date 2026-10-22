import type { ComponentProps, ReactNode } from "react";
import { cx } from "../../internal/cx";
import type { Tone } from "../../internal/tone";

export interface FilterChipProps extends Omit<ComponentProps<"button">, "children" | "aria-pressed" | "onClick"> {
  /** Whether the filter applies. */
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
  /** The tone the chip takes while pressed, such as the tone of the state it filters on. */
  tone?: Tone;
  /** The number of items the filter matches, shown after the label. */
  count?: number;
  children: ReactNode;
}

/** A filter the user turns on or off: outlined while off, filled in its tone while on. */
export function FilterChip({ pressed, onPressedChange, tone = "accent", count, type = "button", className, children, ...rest }: FilterChipProps) {
  return (
    <button
      type={type}
      aria-pressed={pressed}
      className={cx("cpds-filter-chip", pressed && `cpds-tone--${tone}`, className)}
      onClick={() => {
        onPressedChange(!pressed);
      }}
      {...rest}
    >
      {children}
      {count !== undefined && <span className="cpds-filter-chip__count">{count}</span>}
    </button>
  );
}
