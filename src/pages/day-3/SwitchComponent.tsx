import { useState } from 'react';
import { Switch } from '../common/Input/Switch';

export const SwitchComponent = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return <Switch checked={checked} onChange={(event) => setChecked(event.target.checked)} />;
};
