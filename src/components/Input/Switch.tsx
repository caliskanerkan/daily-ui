import { InputProps } from './Input';

export type SwitchProps = Omit<InputProps, 'value' | 'type'> & {
  checked: boolean;
};

export const Switch = (props: SwitchProps) => {
  return (
    <label className="relative inline-block w-[44px] h-[24px]">
      <input type="checkbox" {...props} className="peer opacity-0 w-0 h-0" />
      <span className="absolute cursor-pointer peer-disabled:cursor-not-allowed top-0 left-0 right-0 bottom-0 bg-gray-300 duration-300 before:absolute before:h-[16px] before:w-[16px] before:left-[4px] before:bottom-[4px] before:bg-white before:duration-300 before:rounded-[24px] peer-checked:bg-indigo-500 peer-checked:before:translate-x-[20px] rounded-[24px]"></span>
    </label>
  );
};
