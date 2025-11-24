import { CODING_START_YEAR } from "lib/constants";

function getYearsCoding() {
  return new Date().getFullYear() - CODING_START_YEAR;
}

export { getYearsCoding };
