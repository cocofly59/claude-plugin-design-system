import { type ReactNode, useId, useState } from "react";
import { cx } from "../../internal/cx";
import { Icon } from "../Icon/Icon";
import { iconChevronRight } from "../Icon/icons";

export type CollapsibleRowVariant = "card" | "plain" | "row";

export interface CollapsibleRowProps {
  title: ReactNode;
  /** Before the title, such as a badge naming the item's kind. */
  leading?: ReactNode;
  /** A short summary after the title, such as a count; in a row, at its end. */
  meta?: ReactNode;
  /**
   * card: a bordered row on the ground; plain: a light toggle, such as "Closed items (3)"; row: a dense row of a list,
   * whose content slides open below it.
   */
  variant?: CollapsibleRowVariant;
  /** Marks the row as the current one of its list. */
  selected?: boolean;
  /** Controlled state; leave it unset to let the row keep its own. */
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  className?: string;
  children?: ReactNode;
}

/** A row that shows or hides its content, collapsed by default. */
export function CollapsibleRow({
  title,
  leading,
  meta,
  variant = "card",
  selected = false,
  expanded,
  defaultExpanded = false,
  onExpandedChange,
  className,
  children,
}: CollapsibleRowProps) {
  const [own, setOwn] = useState(defaultExpanded);
  const open = expanded ?? own;
  const contentId = useId();
  const toggle = () => {
    setOwn(!open);
    onExpandedChange?.(!open);
  };
  const sliding = variant === "row";
  return (
    <div
      className={cx("cpds-collapsible", `cpds-collapsible--${variant}`, className)}
      data-expanded={open}
      data-selected={selected || undefined}
      aria-current={selected || undefined}
    >
      <button type="button" className="cpds-collapsible__trigger" aria-expanded={open} aria-controls={contentId} onClick={toggle}>
        <Icon icon={iconChevronRight} size="sm" className="cpds-collapsible__chevron" />
        {leading !== undefined && <span className="cpds-collapsible__leading">{leading}</span>}
        <span className="cpds-collapsible__title">{title}</span>
        {meta !== undefined && <span className="cpds-collapsible__meta">{meta}</span>}
      </button>
      {sliding ? (
        <div id={contentId} className="cpds-collapsible__content" inert={!open}>
          <div className="cpds-collapsible__inner">{children}</div>
        </div>
      ) : (
        <div id={contentId} className="cpds-collapsible__content" hidden={!open}>
          {children}
        </div>
      )}
    </div>
  );
}
