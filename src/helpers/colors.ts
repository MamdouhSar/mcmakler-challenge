export const getRandomNumberBetween = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));

export const getRandomRGBBetween = (min: number, max: number) => {
  const r = getRandomNumberBetween(min, max);
  const g = getRandomNumberBetween(min, max);
  const b = getRandomNumberBetween(min, max);

  return `rgb(${r}, ${g}, ${b})`;
};

export const getBackgroundColor = (rgb?: string | undefined) => {
  if(!rgb) {
    return null;
  }
  let colors = rgb.substring(3);
  return `rgba${colors.substr(0, colors.length - 1)}, 0.2)`;
}
