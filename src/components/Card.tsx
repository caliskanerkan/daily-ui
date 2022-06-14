import clsx from 'clsx';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  const classes = clsx('bg-white border border-indigo-100 rounded shadow p-4', className);
  return <div className={classes}>{children}</div>;
};
