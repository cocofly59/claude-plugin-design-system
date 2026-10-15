import type { ReactElement, ReactNode } from "react";
import { cx } from "../../internal/cx";
import { Icon } from "../Icon/Icon";
import { iconCircleAlert } from "../Icon/icons";

/** What a labelled field receives from its frame: its id and the ids of the texts that describe it. */
export interface FieldControl {
  id: string;
  describedBy: string | undefined;
  invalid: boolean;
}

interface FieldProps {
  id: string;
  label: ReactNode;
  hint: ReactNode | undefined;
  error: ReactNode | undefined;
  className: string | undefined;
  children: (control: FieldControl) => ReactElement;
}

/** The frame shared by the text fields: a label above, the control, then a hint or an error below. */
export function Field({ id, label, hint, error, className, children }: FieldProps) {
  const hintId = hint === undefined ? undefined : `${id}-hint`;
  const errorId = error === undefined ? undefined : `${id}-error`;
  const describedBy = [errorId, hintId].filter((value) => value !== undefined).join(" ") || undefined;
  return (
    <div className={cx("cpds-field", className)}>
      <label className="cpds-field__label" htmlFor={id}>
        {label}
      </label>
      {children({ id, describedBy, invalid: error !== undefined })}
      {error !== undefined && (
        <p className="cpds-field__error" id={errorId}>
          <Icon icon={iconCircleAlert} size="sm" />
          <span>{error}</span>
        </p>
      )}
      {hint !== undefined && (
        <p className="cpds-field__hint" id={hintId}>
          {hint}
        </p>
      )}
    </div>
  );
}
