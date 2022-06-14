import { CreditCardType } from 'cleave.js/options/creditCard';
import { forwardRef, useImperativeHandle, useState } from 'react';

interface CreditCardProps {
  cardNumber: string;
  cardType: CreditCardType;
  owner: string;
  expireDate: string;
  cvc: string;
}

export interface CreditCardRef {
  flipCreditCard: (flip: boolean) => void;
}

export const CreditCard = forwardRef<CreditCardRef, CreditCardProps>((props, ref) => {
  const [flip, setFlip] = useState<boolean>(false);

  const visa = 'https://www.svgrepo.com/show/328104/visa.svg';
  const mastercard = 'https://i.imgur.com/bbPHJVe.png';

  const flipCreditCard = (flip: boolean): void => {
    setFlip(flip);
  };

  useImperativeHandle(ref, () => ({
    flipCreditCard,
  }));

  return (
    <div className="transition-all perspective-5 perspective-origin-center">
      <div
        className={`w-96 h-56 grid grid-cols-1 grid-rows-1 bg-gradient-to-r from-indigo-900 to-indigo-100 rounded-xl text-white shadow-2xl transition-transform duration-1000 origin-center transform-style-3d perspective-origin-center ${
          !flip ? 'rotate-y-0' : '-rotate-y-180'
        }`}
      >
        <div className="flex w-96 h-56 justify-between gap-4 p-6 translate-z-8 rotate-y-0">
          <div className="flex flex-col justify-around">
            <div>
              <p className="font-bold">Card Number</p>
              <p className="font-medium text-xs"> {props.cardNumber || '#### #### #### ####'} </p>
            </div>
            <div>
              <p className="font-bold">Owner Name</p>
              <p className="font-medium text-xs">{props.owner || 'Owner Name'}</p>
            </div>
            <div>
              <p className="font-bold text-xs">Expire Date</p>
              <p className="font-medium text-xs">{props.expireDate || 'MM/YY'} </p>
            </div>
          </div>
          <div className="flex shrink-0">
            <img className="w-14 h-14" src={props.cardType === 'mastercard' ? mastercard : visa} />
          </div>
        </div>
        <div className="flex w-96 h-56 flex-col gap-4 items-end p-6 translate-z-8 rotate-y-180">
          <div className="h-12 rounded-xl bg-gray-200 w-full"></div>
          <div>
            <p className="font-bold">CVC/CVC2</p>
            <p className="font-medium text-xs">{props.cvc || 'XXX'}</p>
          </div>
        </div>
      </div>
    </div>
  );
});
