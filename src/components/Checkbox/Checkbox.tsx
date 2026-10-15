import { Choice, type ChoiceProps } from "../Radio/Choice";

export type CheckboxProps = ChoiceProps;

export function Checkbox(props: CheckboxProps) {
  return <Choice {...props} type="checkbox" />;
}
