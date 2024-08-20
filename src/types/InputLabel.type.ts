type IconProps = {
  visibility: 'hover' | 'always';
  infoMessage: string;
};
export type RequiredTextField = {
  fieldOption: 'required';
  value: 'required' | 'asterisk';
};

export type OptionalTextField = {
  fieldOption: 'optional';
  value: 'optional' | 'none';
};

export type InputLabelProps = {
  labelPosition?: 'top' | 'side';
  infoIcon?: IconProps;
  elementSize?: 'sm' | 'medium';
  labelText: string;
  textField: RequiredTextField | OptionalTextField;
} & React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;
