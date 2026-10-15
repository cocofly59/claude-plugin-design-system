import type { ComponentProps, ReactNode } from "react";
import { cx } from "../../internal/cx";

export interface ChoiceProps extends Omit<ComponentProps<"input">, "type" | "children"> {
  label: ReactNode;
  /** A second line under the label. */
  description?: ReactNode;
}

/** A radio button or a checkbox with its label, the whole row being the touch target. */
export function Choice({ type, label, description, className, ...rest }: ChoiceProps & { type: "radio" | "checkbox" }) {
  return (
    <label className={cx("cpds-choice", className)}>
      <input {...rest} type={type} className="cpds-choice__input" />
      <span className="cpds-choice__text">
        <span className="cpds-choice__label">{label}</span>
        {description !== undefined && <span className="cpds-choice__description">{description}</span>}
      </span>
    </label>
  );
}
