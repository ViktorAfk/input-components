export type Size = 'sm' | 'medium' | 'large' | 'xl';

export enum AdditionalClasses {
  HasError = 'error',
  Disabled = 'disabled',
  Outlined = 'border-none',
  Right = 'text-right',
}

export enum SizeClasses {
  Sm = 'sm',
  Med = '',
  Large = 'l',
  XL = 'xl',
}

export type CommonProps = {
  elementSize?: Size;
  quiet?: boolean;
  textRight?: boolean;
  error?: boolean;
  disabled?: boolean;
  iconBefore?: boolean;
  iconAfter?: boolean;
  shortKey?: boolean;
  labelPosition?: 'top' | 'side';
};

export interface InputSize {
  inputSize?: Size;
}
