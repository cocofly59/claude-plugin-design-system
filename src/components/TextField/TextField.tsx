import { type ComponentProps, type ReactNode, useId } from "react";
import { Field } from "../Field/Field";

export interface TextFieldProps extends Omit<ComponentProps<"input">, "children" | "className"> {
  label: ReactNode;
  /** A help text below the field. */
  hint?: ReactNode;
  /** An error message below the field; the field shows its error state while it is set. */
  error?: ReactNode;
  className?: string;
}

export function TextField({ label, hint, error, className, id, type = "text", ...rest }: TextFieldProps) {
  const generated = useId();
  return (
    <Field id={id ?? generated} label={label} hint={hint} error={error} className={className}>
      {(control) => (
        <input
          {...rest}
          id={control.id}
          type={type}
          className="cpds-input"
          aria-invalid={control.invalid || undefined}
          aria-describedby={control.describedBy}
        />
      )}
    </Field>
  );
}
