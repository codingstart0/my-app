import { Button } from '@mui/material';
import './Test.css';

export const MANO_CONST = '123';

export function Test({ prop1, children }) {
  const onButtonClick = (value) => {
    alert(value);
  };

  return (
    <div className='Test'>
      <h2>{prop1}</h2>
      <div>
        <Button variant='outlined' onClick={() => onButtonClick('Testas')}>
          Mygtukas
        </Button>
      </div>
      <div>{children}</div>
    </div>
  );
}
