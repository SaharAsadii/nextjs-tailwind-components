// example :
// formats
// mdw  ==>   بهمن ۱۲،شنبه
// yMd  ==>   ۱۳۹۷ بهمن ۱۲
// ymd-dot  ==>   ۱۳۹۷.۸.۱۲

export const FORMAT = {
  yymmdd: "ymd",
  dashymd: "dashymd",
  yymmdd_hm: "ymd hm",
  yymmdd_hms: "ymd hms",
  MdW: "MdW",
  MdW_hm: "MdW hm",
  MdW_hms: "MdW hms",
  yMd: "yMd",
  yMd_hm: "yMd hm",
  yMd_hms: "ymd hms",
  ymd_dot: "ymd-dot",
  hm: "hm",
  hms: "hms",
};

const MonthNameFa = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const MonthNameEn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WeekDayNameFa = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
];

const WeekDayNameEn = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function getDate(milis) {
  let tempp = milis?.toString()?.includes(".")
    ? milis?.toString()?.split(".")[0]
    : milis;

  if (Number.isInteger(parseInt(tempp))) {
    const date = new Date(parseInt(tempp));
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      weekDay: (date.getDay() + 6) % 7,
      houre: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  } else {
    throw new Error("Date invalid");
  }
}
function getPersionNumber(str) {
  str = str + "";
  let charCodeZero = "۰".charCodeAt(0);
  return str.replace(/[0-9]|,/g, function (w) {
    if (w == ",") return "،";
    return String.fromCharCode(parseInt(w) + charCodeZero);
  });
}

function getGregorianFormat(date, format) {
  if (date == undefined || date == "") {
    return "";
  }
  let result = "";
  if (format !== undefined) {
    format = format + "";
    let fArr = format.split(" ");
    let dateF = fArr[0];
    let timeF = fArr[1];

    if (dateF !== "") {
      if (dateF == "MdW") {
        result =
          getWeekDayGregorian(date) +
          ", " +
          date.day +
          " " +
          getMonthGregorian(date);
      } else if (dateF == "yMd") {
        result = date.day + " " + getMonthGregorian(date) + " " + date.year;
      } else if (dateF == "ymd-dot") {
        result = date.year + "." + date.month + "." + date.day;
      } else if (dateF == "ymd") {
        result = date.year + "/" + date.month + "/" + date.day;
      } else if (dateF == "dashymd") {
        result = date.year + "-" + date.month + "-" + date.day;
      }
      if (fArr.length > 1 && timeF !== "") {
        result += " ";
      }
    }
    if (fArr.length > 1 && timeF !== "") {
      if (timeF == "hm") {
        result += date.houre + ":" + date.minute;
      } else if (timeF == "hms") {
        result += date.houre + ":" + date.minute + ":" + date.second;
      }
    }
  } else {
    result = date.year + "/" + date.month + "/" + date.day;
  }
  return result;
}

function getJalaliFormat(date, format) {
  if (date == undefined || date == "") {
    return "";
  }
  let result = "";
  if (format !== undefined) {
    format = format + "";
    let fArr = format.split(" ");
    let dateF = fArr[0];
    let timeF = fArr[1];

    if (dateF !== "") {
      if (dateF == "mdw") {
        result =
          getWeekDayJalali(date) +
          ", " +
          date.day +
          " " +
          getMonthJalali(date) +
          " " +
          date.year;
      } else if (dateF == "yMd") {
        result = date.day + " " + getMonthJalali(date) + " " + date.year;
      } else if (dateF == "ymd-dot") {
        result = date.year + "." + date.month + "." + date.day;
      } else if (dateF == "ymd") {
        result = date.year + "/" + date.month + "/" + date.day;
      } else if (dateF == "dashymd") {
        result = date.year + "-" + date.month + "-" + date.day;
      }
      if (fArr.length > 1 && timeF !== "") {
        result += " ";
      }
    }

    if (fArr.length > 1 && timeF !== "") {
      if (timeF == "hm") {
        result += date.houre + ":" + date.minute;
      } else if (timeF == "hms") {
        result += date.houre + ":" + date.minute + ":" + date.second;
      }
    }
  } else {
    result = date.year + "/" + date.month + "/" + date.day;
  }
  return getPersionNumber(result);
}

function getWeekDayJalali(date) {
  return WeekDayNameFa[date.weekDay];
}

function getWeekDayGregorian(date) {
  return WeekDayNameEn[date.weekDay];
}

function getMonthJalali(date) {
  return MonthNameFa[date.month - 1];
}

function getMonthGregorian(date) {
  return MonthNameEn[date.month - 1];
}

function gregorianToJalali(date) {
  let jy;
  let gy = date.year,
    gm = date.month,
    gd = date.day,
    wd = date.weekDay;
  let g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  if (gy > 1600) {
    jy = 979;
    gy -= 1600;
  } else {
    jy = 0;
    gy -= 621;
  }
  let gy2 = gm > 2 ? gy + 1 : gy;
  let days =
    365 * gy +
    parseInt((gy2 + 3) / 4) -
    parseInt((gy2 + 99) / 100) +
    parseInt((gy2 + 399) / 400) -
    80 +
    gd +
    g_d_m[gm - 1];
  jy += 33 * parseInt(days / 12053);
  days %= 12053;
  jy += 4 * parseInt(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
  }
  let jm =
    days < 186 ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
  let jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
  wd = (wd + 2) % 7;
  return {
    year: jy,
    month: jm,
    day: jd,
    weekDay: wd,
    houre: date.houre,
    minute: date.minute,
    second: date.second,
  };
}

function jalaliToGregorian(date) {
  let jy = date.year,
    jm = date.month,
    jd = date.day,
    wd = date.weekDay;
  let gy;
  if (jy > 979) {
    gy = 1600;
    jy -= 979;
  } else {
    gy = 621;
  }
  let days =
    365 * jy +
    parseInt(jy / 33) * 8 +
    parseInt(((jy % 33) + 3) / 4) +
    78 +
    jd +
    (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
  gy += 400 * parseInt(days / 146097);
  days %= 146097;
  if (days > 36524) {
    gy += 100 * parseInt(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }
  gy += 4 * parseInt(days / 1461);
  days %= 1461;
  if (days > 365) {
    gy += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
  }
  let gd = days + 1;
  let sal_a = [
    0,
    31,
    (gy % 4 == 0 && gy % 100 !== 0) || gy % 400 == 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  let gm;
  for (gm = 0; gm < 13; gm++) {
    let v = sal_a[gm];
    if (gd <= v) break;
    gd -= v;
  }
  wd = (wd + 6) % 7;
  return { year: gy, month: gm, day: gd, weekDay: wd };
}

const temp = (date) => {
  let datum = Date.parse(date);

  let gregorianDate = getDate(datum);
  let jalaliDate = gregorianToJalali(gregorianDate);
  return {
    gregorian: gregorianDate,
    jalali: jalaliDate,
    MonthNameFa,
    MonthNameEn,
    WeekDayNameFa,
    WeekDayNameEn,
    getJalaliFormat: (format) => getJalaliFormat(jalaliDate, format),
    getGregorianFormat: (format) => getGregorianFormat(gregorianDate, format),
    getMonthGregorian: () => getMonthGregorian(gregorianDate),
    getMonthJalali: () => getMonthJalali(jalaliDate),
    getWeekDayGregorian: () => getWeekDayGregorian(gregorianDate),
    getWeekDayJalali: () => getWeekDayJalali(jalaliDate),
  };
};

export default temp;
