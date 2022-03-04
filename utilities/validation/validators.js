export const isPhone = (phone) =>
  !!phone && !(phone.length !== 11 || !phone.startsWith("09"));

export const isFixedPhone = (phone) => {
  const re = /^(0)[0-9]{10}$/;
  return re.test(phone);
};

export const isNumeric = (value) => !!value && /^-{0,1}\d+$/.test(value);

export const isPersianNumber = (value) => !!value && /[۹۸۷۶۵۴۳۲۱۰]/.test(value);

export const isEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const hasValue = ({ val }) => {
  if ((val !== undefined && val !== null && val !== "") === true) {
    return true;
  } else {
    return false;
  }
};

export const isValidNationalCode = (value) => {
  const re = /^[0-9]{10}$/;
  return re.test(value);
};

export const checkPersianLanguage = (value) => {
  let persianCheck = /^[\u0600-\u06FF\s]+$/;
  return persianCheck.test(value);
};

export const isWithoutSpace = (text) => !text.includes(" ");

export const isValidUrl = (value) => {
  const re =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  return re.test(value);
};

export const isValidShaba = (value) => {
  const re = /^[0-9]{24}$/;
  return re.test(value);
};

export const isValidPostalCode = (value) => {
  const re = /^[0-9]{10}$/;
  return re.test(value);
};
