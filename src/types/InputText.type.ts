import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type InputTextProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  React.DOMAttributes<HTMLInputElement> & {
    value: string;
    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  };
