import { CreditCardType } from 'cleave.js/options/creditCard';
import { ChangeEvent, useRef, useState } from 'react';
import { Card } from '../common/Card';
import { Input } from '../common/Input/Input';
import { Label } from '../common/Label';
import { Layout } from '../common/Layout';
import { MaskedInput } from '../common/Input/MaskedInput';
import { CreditCard, CreditCardRef } from './CreditCard';

export const Payment = () => {
  const creditCardRef = useRef<CreditCardRef>(null);
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardType, setCardType] = useState<CreditCardType>('unknown');
  const [owner, setOwner] = useState<string>('');
  const [expireDate, setExpireDate] = useState<string>('');
  const [cvc, setCVC] = useState<string>('');

  const flipHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'cvc') {
      creditCardRef.current?.flipCreditCard(true);
    } else {
      creditCardRef.current?.flipCreditCard(false);
    }
  };

  const blurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'cvc') {
      creditCardRef.current?.flipCreditCard(false);
    }
  };

  return (
    <Layout>
      <Card className="w-3/4 flex flex-row">
        <div className="flex flex-col flex-1 p-4 gap-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Payment</h1>
          <div className="flex flex-col gap-2">
            <Label htmlFor="card-number">Card Number</Label>
            <MaskedInput
              onFocus={flipHandler}
              placeholder="Card Number"
              id="card-number"
              name="card-number"
              value={cardNumber}
              onChange={(event) => setCardNumber(event.target.value)}
              options={{
                creditCard: true,
                onCreditCardTypeChanged: (type: CreditCardType) => setCardType(type),
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="owner">Owner Name</Label>
            <Input
              onFocus={flipHandler}
              placeholder="Owner Name"
              id="owner"
              name="owner"
              value={owner}
              onChange={(event) => setOwner(event.target.value)}
            />
          </div>
          <div className="flex flex-1 gap-4">
            <div className="w-1/2 flex flex-col gap-2">
              <Label htmlFor="expire-date">Expire Date</Label>
              <MaskedInput
                onFocus={flipHandler}
                placeholder="MM/YY"
                id="expire-date"
                name="expire-date"
                value={expireDate}
                onChange={(event) => setExpireDate(event.target.value)}
                options={{
                  date: true,
                  datePattern: ['m', 'y'],
                }}
              />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <Label htmlFor="cvc">CVC</Label>
              <MaskedInput
                onBlur={blurHandler}
                onFocus={flipHandler}
                placeholder="CVC/CVV"
                id="cvc"
                name="cvc"
                value={cvc}
                onChange={(event) => setCVC(event.target.value)}
                options={{
                  numericOnly: true,
                  blocks: [3],
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <CreditCard
            ref={creditCardRef}
            cardNumber={cardNumber}
            cardType={cardType}
            owner={owner}
            expireDate={expireDate}
            cvc={cvc}
          />
        </div>
      </Card>
    </Layout>
  );
};
