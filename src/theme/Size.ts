export enum SIZE {
  XSS = 'xss',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  '3XL' = '3xl',
}

export const ImageSizes: Record<SIZE, string> = {
  xss: 'h-[24px] w-[24px]',
  xs: 'h-[32px] w-[32px]',
  sm: 'h-[40px] w-[40px]',
  md: 'h-[48px] w-[48px]',
  lg: 'h-[56px] w-[56px]',
  xl: 'h-[68px] w-[68px]',
  '2xl': 'h-[80px] w-[80px]',
  '3xl': 'h-[92px] w-[92px]',
};

export const TextSize: Record<SIZE, string> = {
  xss: 'text-xxs font-extralight',
  xs: 'text-xs font-light',
  sm: 'text-sm font-normal',
  md: 'text-md font-medium',
  lg: 'text-lg font-semibold',
  xl: 'text-xl font-bold',
  '2xl': 'text-2xl font-extrabold',
  '3xl': 'text-3xl font-black',
};
