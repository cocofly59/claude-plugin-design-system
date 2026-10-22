import { type KeyboardEvent, type ReactNode, useId, useRef } from "react";
import { cx } from "../../internal/cx";
import type { SwitchOption } from "../SegmentedControl/SegmentedControl";

export interface TabsProps<T extends string> {
  tabs: readonly SwitchOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /** Names the tab list for assistive technologies. */
  label: string;
  /** One panel per tab, keyed by the tab's id. */
  panels: Readonly<Record<T, ReactNode>>;
  className?: string;
}

/**
 * Tabs sharing the full width over panels drawn in one grid cell: only the selected panel shows, the others stay laid
 * out but hidden and inert, so the cell keeps the tallest panel's height and switching moves nothing below.
 */
export function Tabs<T extends string>({ tabs, value, onChange, label, panels, className }: TabsProps<T>) {
  const prefix = useId();
  const list = useRef<HTMLDivElement>(null);
  const move = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = tabs.length - 1;
    const target = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[event.key];
    const next = target === undefined ? undefined : tabs[target];
    if (next === undefined) return;
    event.preventDefault();
    onChange(next.id);
    list.current?.querySelector<HTMLButtonElement>(`#${CSS.escape(`${prefix}-tab-${next.id}`)}`)?.focus();
  };
  return (
    <div className={cx("cpds-tabs", className)}>
      <div ref={list} role="tablist" aria-label={label} className="cpds-tabs__list">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`${prefix}-tab-${tab.id}`}
            className="cpds-tabs__tab"
            aria-selected={tab.id === value}
            aria-controls={`${prefix}-panel-${tab.id}`}
            tabIndex={tab.id === value ? 0 : -1}
            onClick={() => {
              onChange(tab.id);
            }}
            onKeyDown={(event) => {
              move(event, index);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="cpds-tabs__panels">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`${prefix}-panel-${tab.id}`}
            aria-labelledby={`${prefix}-tab-${tab.id}`}
            className="cpds-tabs__panel"
            data-active={tab.id === value || undefined}
            inert={tab.id !== value}
          >
            {panels[tab.id]}
          </div>
        ))}
      </div>
    </div>
  );
}
