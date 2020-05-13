export const changeFontSize = (size: number, amount: number) => {
  let res = size + amount;
  res = Math.min(res, 32);
  res = Math.max(res, 12);
  return res;
};
