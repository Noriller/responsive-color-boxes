/**
 * This is a "dumb" component.
 * It just renders a box with a random color every time it is rendered.
 */
export function MyBox({ number, handleClick, children }) {
  const { r, g, b } = randonRGBValue();
  // This is, apparently, a common algorithm to figure out if the contrast color should be white or black.
  const contrastFont =
    r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000' : '#fff';

  return (
    <div
      onClick={handleClick}
      className={`box ${number}`}
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: contrastFont,
      }}>
      {children}
    </div>
  );
}

/**
 * This just calculates a random number between 0 and 255.
 */
function randonRGBValue() {
  const randomValue = () => Math.floor(Math.random() * 256);
  return {
    r: randomValue(),
    g: randomValue(),
    b: randomValue(),
  };
}
