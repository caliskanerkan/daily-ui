import clsx from 'clsx';
import {
  ReactNode,
  HTMLAttributeAnchorTarget,
  HTMLAttributeReferrerPolicy,
  createElement,
} from 'react';
import { COLOR, LinkColor } from '../theme/Colors';
import { TextSize } from '../theme/Size';
import { SIZE } from '../theme/Size';

type LinkProps = {
  children: ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  download?: any;
  href?: string;
  hrefLang?: string;
  media?: string;
  ping?: string;
  rel?: string;
  target?: HTMLAttributeAnchorTarget;
  type?: string;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
  color?: COLOR;
  size?: SIZE;
};

export const Link = ({
  children,
  className,
  size = SIZE.SM,
  color = COLOR.GRAY,
  ...rest
}: LinkProps) => {
  const classes = clsx(
    `${LinkColor[color]} ${TextSize[size]} cursor-pointer hover:underline`,
    className,
  );
  return createElement('a', { className: classes, ...rest }, children);
};
