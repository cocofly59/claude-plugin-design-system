import { type ReactNode, useId, useState } from "react";
import { cx } from "../../internal/cx";
import { Icon } from "../Icon/Icon";

export type CollapsibleRowVariant = "card" | "plain";

export interface CollapsibleRowProps {
  title: ReactNode;
  /** A short summary after the title, such as a count. */
  meta?: ReactNode;
  /** card: a bordered row on the ground; plain: a light toggle, such as "Closed items (3)". */
  variant?: CollapsibleRowVariant;
  /** Controlled state; leave it unset to let the row keep its own. */
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  className?: string;
  children?: ReactNode;
}

/** A row that shows or hides its content, collapsed by default. */
export function CollapsibleRow({ title, meta, variant = "card", expanded, defaultExpanded = false, onExpandedChange, className, children }: CollapsibleRowProps) {
  const [own, setOwn] = useState(defaultExpanded);
  const open = expanded ?? own;
  const contentId = useId();
  const toggle = () => {
    setOwn(!open);
    onExpandedChange?.(!open);
  };
  return (
    <div className={cx("cpds-collapsible", `cpds-collapsible--${variant}`, className)} data-expanded={open}>
      <button type="button" className="cpds-collapsible__trigger" aria-expanded={open} aria-controls={contentId} onClick={toggle}>
        <Icon name="chevron-right" size="sm" className="cpds-collapsible__chevron" />
        <span className="cpds-collapsible__title">{title}</span>
        {meta !== undefined && <span className="cpds-collapsible__meta">{meta}</span>}
      </button>
      <div id={contentId} className="cpds-collapsible__content" hidden={!open}>
        {children}
      </div>
    </div>
  );
}
