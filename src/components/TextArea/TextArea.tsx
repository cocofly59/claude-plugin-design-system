import { type ComponentProps, type ReactNode, useId } from "react";
import { Field } from "../Field/Field";

export interface TextAreaProps extends Omit<ComponentProps<"textarea">, "children" | "className"> {
  label: ReactNode;
  /** A help text below the field. */
  hint?: ReactNode;
  /** An error message below the field; the field shows its error state while it is set. */
  error?: ReactNode;
  className?: string;
}

export function TextArea({ label, hint, error, className, id, rows = 3, ...rest }: TextAreaProps) {
  const generated = useId();
  return (
    <Field id={id ?? generated} label={label} hint={hint} error={error} className={className}>
      {(control) => (
        <textarea
          {...rest}
          id={control.id}
          rows={rows}
          className="cpds-input"
          aria-invalid={control.invalid || undefined}
          aria-describedby={control.describedBy}
        />
      )}
    </Field>
  );
}
