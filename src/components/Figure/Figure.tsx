import { type ReactNode, useId } from "react";
import { cx } from "../../internal/cx";

export interface FigureProps {
  /** A line under the visual. */
  caption?: ReactNode;
  className?: string;
  /** The visual: a diagram, a mockup, an image. */
  children: ReactNode;
}

/** A frame around a visual, with an optional caption. */
export function Figure({ caption, className, children }: FigureProps) {
  const captionId = useId();
  return (
    <figure className={cx("cpds-figure", className)} aria-labelledby={caption === undefined ? undefined : captionId}>
      <div className="cpds-figure__content">{children}</div>
      {caption !== undefined && <figcaption id={captionId} className="cpds-figure__caption">{caption}</figcaption>}
    </figure>
  );
}
