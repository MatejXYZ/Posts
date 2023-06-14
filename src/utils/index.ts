export const capitalizeFirstLetter = (str: string) => {
  const firstLetter = str[0];

  if (firstLetter) return firstLetter.toUpperCase().concat(str.slice(1));

  return str;
};
