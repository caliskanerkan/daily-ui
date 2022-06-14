import { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';
import { COLOR, BackgroundColor } from '../theme/Colors';

interface ButtonProps {
  children: ReactNode;
  bg?: COLOR;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  style?: CSSProperties;
  type?: 'submit' | 'reset' | 'button';
}

export const Button = ({ children, type, className, bg = COLOR.INDIGO, ...rest }: ButtonProps) => {
  const classes = clsx(
    `border text-white rounded-md px-4 py-2 ${BackgroundColor[bg]} disabled:cursor-not-allowed}`,
    className,
  );
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};
