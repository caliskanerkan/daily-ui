import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { COLOR } from '../../theme/Colors';

type BasicOperators = '/' | '*' | '-' | '+' | '=' | ',';
type Tuple = BasicOperators | number;

export const Calculator = () => {
  const keys: Tuple[][] = [
    [7, 8, 9, '+'],
    [4, 5, 6, '-'],
    [1, 2, 3, '*'],
    [0, ',', '=', '/'],
  ];

  return (
    <Card className="w-[242px]">
      <div className="grid grid-cols-4">
        <Button className="rounded-full flex items-center justify-center h-[52px]" bg={COLOR.GRAY}>
          C
        </Button>
        {keys.flat().map((key) => {
          const disabled = typeof key === 'string';

          return (
            <Button
              bg={COLOR.INDIGO}
              key={key}
              disabled={disabled}
              className="rounded-full flex items-center justify-center h-[52px]"
            >
              {key}
            </Button>
          );
        })}
      </div>
    </Card>
  );
};
