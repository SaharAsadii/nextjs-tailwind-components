import {
  isEmail,
  hasValue,
  checkPersianLanguage,
  isPhone,
  isFixedPhone,
  isValidNationalCode,
  isValidUrl,
  isValidShaba,
  isValidPostalCode,
} from "utilities/validation/validators";

const validate = {
  required: (value) => {
    return hasValue({ val: value }) || "فیلد الزامی";
  },

  minLength: (value, length) => {
    if (value && value.length < length) {
      return `تعداد کاراکتر کمتر از ${length} مجاز نمی‌باشد`;
    }
  },
  maxLength: (value, length) => {
    if (value && value.length > length) {
      return `تعداد کاراکتر بیش از ${length} مجاز نمی‌باشد`;
    }
  },
  email: (value) => isEmail(value) || "ایمیل نامعتبر",
  persianDigit: (value) => {
    return checkPersianLanguage(value) || "لطفا از حروف فارسی استفاده نمایید";
  },
  isPhone: (value) => isPhone(value) || "شماره همراه نامعتبر",
  isFixedPhone: (value) => isFixedPhone(value) || "شماره نامعتبر",
  isNationalCode: (value) => isValidNationalCode(value) || "شماره ملی نامعتبر",
  isUrl: (value) => isValidUrl(value) || " آدرس اینترنتی نامعتبر",
  isShaba: (value) => isValidShaba(value) || "شماره شبا نامعتبر",
  isPostalCode: (value) => isValidPostalCode(value) || "کد پستی نامعتبر",
};

export default validate;
