import { useState } from 'react';
import './BoxesWrapper.css';
import { MyBox } from './MyBox';

const baseBoxes = [
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
];

/**
 * What I'm deliberately doing here is an anti-pattern.
 * Every time the wrapper is rendered, so are the boxes.
 * With this approach, every time you click on a box, it will force a re-render of the boxes.
 * This happens because of the shallow copying of the array, which creates a new reference to the boxes object.
 */
export function BoxesWrapper() {
  const [boxes, setBoxes] = useState(baseBoxes);
  const handleClick = () => setBoxes([...baseBoxes]);

  return (
    <div className='wrapper'>
      {boxes.map(([name, number]) => (
        <MyBox key={name} number={name} handleClick={handleClick}>
          {number}
        </MyBox>
      ))}
    </div>
  );
}
