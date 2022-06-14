import clsx from 'clsx';
import { ChangeEvent, CSSProperties } from 'react';

export interface InputProps {
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: CSSProperties;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email';
  onFocus?: (value: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type = 'text', className, ...rest }: InputProps) => {
  const classes = clsx(
    'w-full outline-none border text-gray-500 focus:ring-1 ring-indigo-500 ring-offset-0 bg-white border-indigo-100 shadow-sm rounded-md px-4 py-2',
    className,
  );
  return <input type={type} className={classes} {...rest} />;
};
