import clsx from 'clsx';
import { Shape } from '../theme/Round';
import { ImageSizes, SIZE } from '../theme/Size';

type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & { square?: boolean; circle?: boolean; size?: SIZE; full?: boolean };

export const Image = ({ square, circle, className, full, size, ...rest }: ImageProps) => {
  const classes = clsx(
    {
      'object-cover shadow': true,
      [`${Shape.square}`]: square,
      [`${Shape.circle}`]: circle,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      [`${ImageSizes[size!]}`]: size,
      'h-full w-full': full,
    },
    className,
  );
  return <img className={classes} {...rest} />;
};
