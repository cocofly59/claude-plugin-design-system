import { Choice, type ChoiceProps } from "./Choice";

export type RadioProps = ChoiceProps;

export function Radio(props: RadioProps) {
  return <Choice {...props} type="radio" />;
}
