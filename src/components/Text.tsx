import clsx from 'clsx';
import { createElement } from 'react';
import { ReactNode } from 'react';
import { COLOR, TextColor } from '../theme/Colors';
import { SIZE, TextSize } from '../theme/Size';

interface TextProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: SIZE;
  children: ReactNode;
  className?: string;
  color?: COLOR;
}

export const Text = ({
  children,
  size = SIZE.LG,
  as,
  color = COLOR.INDIGO,
  className,
}: TextProps) => {
  const classes = clsx(`${TextSize[size]} ${TextColor[color]}`, className);
  return createElement(as, { className: classes }, children);
};
