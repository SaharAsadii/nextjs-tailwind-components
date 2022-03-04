import Moment from "moment-jalaali";

export function momentToJalaliWithTime(moment = new Moment()) {
  return moment.format("hh:mm - jYYYY/jMM/jDD");
}

export function momentToJalali(moment = new Moment()) {
  return moment.format("jYYYY/jMM/jDD");
}

export function momenToRegular(moment = new Moment()) {
  return moment.format("YYYY/MM/DD");
}

export function momentToRegularWithTime(moment = new Moment()) {
  return moment.format("hh:mm - YYYY/MM/DD");
}

export function miladiToJalali(date) {
  return momentToJalali(Moment(date));
}

export function miladiToJalaliWithTime(date) {
  return momentToJalaliWithTime(Moment(date));
}

export function dateToMoment(date) {
  return new Moment(date);
}
