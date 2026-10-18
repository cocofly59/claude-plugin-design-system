import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../internal/cx";

export type ProseDensity = "block" | "inline";

export interface ProseProps extends HTMLAttributes<HTMLElement> {
  /**
   * block: a long text in the full block grammar, such as a body rendered from Markdown;
   * inline: a one-line text inside a row, such as a radio label or a list item, in the inline grammar only and without block margins.
   */
  density?: ProseDensity;
  /** The rendered text: paragraphs, headings, lists, code, tables, quotes, and links made with `Link`. */
  children?: ReactNode;
}

/** Styles rendered rich text, such as the output of a Markdown renderer, with the design system's tokens. */
export function Prose({ density = "block", className, children, ...rest }: ProseProps) {
  const Tag = density === "inline" ? "span" : "div";
  return (
    <Tag className={cx("cpds-prose", `cpds-prose--${density}`, className)} {...rest}>
      {children}
    </Tag>
  );
}
