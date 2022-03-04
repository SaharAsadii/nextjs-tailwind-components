import dateC from "./dateConvert";

class Convertor {
  constructor() {}

  tDate(date, format = undefined) {
    let date_ = date;
    if (date.getTime !== undefined) {
      date_ = date.getTime();
    }
    return dateC(date).getJalaliFormat(format);
  }

  minutesToHours(minutes) {
    // returns an array as ** [hours, minutes] ** where {hours} is number of complete hours in given {min} and {minutes} is remained minutes
    if (isNaN(minutes)) {
      throw new TypeError(`Couldn't parse input : "${minutes}" into number`);
    }
    minutes = Number(minutes);
    return [Math.floor(minutes / 60), minutes % 60];
  }

  tTime(minutes) {
    const [h, m] = this.minutesToHours(minutes);

    if (h === "۰") {
      return `${m} دقیقه`;
    } else if (m === "۰") {
      return `${h} ساعت`;
    }
    return `${h} ساعت و ${m} دقیقه`;
  }
}

let convertor = new Convertor();

export default convertor;
