import type { ComponentProps } from "react";
import { cx } from "../../internal/cx";

export type LinkVariant = "accent" | "muted";

export interface LinkProps extends ComponentProps<"a"> {
  href: string;
  /** accent: a link in running text or a navigation link; muted: a secondary link, such as a breadcrumb step. */
  variant?: LinkVariant;
}

export function Link({ variant = "accent", className, children, ...rest }: LinkProps) {
  return (
    <a className={cx("cpds-link", `cpds-link--${variant}`, className)} {...rest}>
      {children}
    </a>
  );
}
