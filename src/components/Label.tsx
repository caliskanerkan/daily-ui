import clsx from 'clsx';
import { ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
  id?: string;
}

export const Label = ({ children, className, ...rest }: LabelProps) => {
  const classes = clsx('select-none text-md font-bold text-gray-500', className);
  return (
    <label className={classes} {...rest}>
      {children}
    </label>
  );
};
