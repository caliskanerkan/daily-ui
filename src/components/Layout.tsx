import clsx from 'clsx';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  const classes = clsx(
    'h-screen bg-gradient-to-r from-indigo-900 to-indigo-100 flex flex-col justify-center items-center',
    className,
  );
  return <div className={classes}>{children}</div>;
};
