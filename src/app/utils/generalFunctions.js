export const padZerosNumber = (number, length = 6) => {
  const str = String(number);
  const pad = "0".repeat(length);
  return pad.substring(0, length - str.length) + str;
};

export const numberFloatFix = (number) => {
  try {
    return parseFloat(number).toFixed(2);
  } catch (error) {
    return number;
  }
};

export const renderAmount = (amount, currency = "$") => {
  return `${currency} ${numberFloatFix(amount)}`;
};
