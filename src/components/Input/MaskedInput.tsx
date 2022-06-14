import { InputProps } from './Input';
import Cleave from 'cleave.js/react';
import { CleaveOptions } from 'cleave.js/options';
import clsx from 'clsx';

type MaskedInputProps = InputProps & {
  options: CleaveOptions;
};

export const MaskedInput = ({ className, ...rest }: MaskedInputProps) => {
  const classes = clsx(
    'w-full outline-none border text-gray-500 focus:ring-1 ring-indigo-500 ring-offset-0 bg-white border-indigo-100 shadow-sm rounded-md px-4 py-2',
    className,
  );
  return <Cleave className={classes} {...rest} />;
};
