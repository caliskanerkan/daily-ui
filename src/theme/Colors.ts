export enum COLOR {
  INDIGO = 'indigo',
  GRAY = 'gray',
  GREEN = 'green',
}

export const BackgroundColor: Record<COLOR, string> = {
  indigo: 'bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700',
  gray: 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700',
  green: 'bg-green-500 hover:bg-green-600 active:bg-green-700',
};

export const TextColor: Record<COLOR, string> = {
  indigo: 'text-indigo-900',
  gray: 'text-gray-900',
  green: 'text-green-900',
};

export const LinkColor: Record<COLOR, string> = {
  indigo: 'text-indigo-500 hover:text-indigo-600',
  gray: 'text-gray-500 hover:text-gray-600',
  green: 'text-green-500 hover:text-green-600',
};
