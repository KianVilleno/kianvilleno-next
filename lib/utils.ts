import { BIRTH_YEAR, CODING_START_YEAR } from "lib/constants";

function getYearsCoding() {
  return new Date().getFullYear() - CODING_START_YEAR;
}

function getAge() {
  return new Date().getFullYear() - BIRTH_YEAR;
}

export { getAge, getYearsCoding };
