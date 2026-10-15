import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../internal/cx";

export type CardVariant = "default" | "subtle" | "dashed";
export type CardInset = "none" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** default: a white card on the ground; subtle: a quieter card for secondary content; dashed: a placeholder, such as a deferred item. */
  variant?: CardVariant;
  /** The space inside the card: none 0, md 16, lg 24. */
  inset?: CardInset;
  as?: "div" | "section" | "article" | "li" | "aside";
  children?: ReactNode;
}

export function Card({ variant = "default", inset = "lg", as: Tag = "div", className, children, ...rest }: CardProps) {
  return (
    <Tag className={cx("cpds-card", `cpds-card--${variant}`, `cpds-card--inset-${inset}`, className)} {...rest}>
      {children}
    </Tag>
  );
}
