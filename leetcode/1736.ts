const twoInterrogant = (params: {
  valueArr: number[];
  maxValue: number;
}): number => {
  let value = +params.valueArr.join("");

  const diff = params.maxValue - value;

  if (diff < 0) value += diff;

  return value;
};

const oneInterrogant = (params: {
  indexInterrogant: number;
  valueArr: number[];
  rules: Record<number, number>;
  maxValue: number;
}): number => {
  let isInvalid = true;
  while (isInvalid) {
    const num = +params.valueArr.join("");
    if (params.maxValue - num >= 0) {
      isInvalid = false;
      break;
    }
    params.valueArr[params.indexInterrogant] =
      params.valueArr[params.indexInterrogant] - 1;
  }

  return +params.valueArr.join("");
};

const parseTime = (n: number) => (n > 10 ? n.toString() : `0${n}`);

const getValidTime = (params: {
  rules: Record<number, number>;
  value: string;
  maxValue: number;
}): string => {
  let countInterrogant = 0;
  if (!params.value.includes("?")) return params.value;
  const indexInterrogant = params.value.indexOf("?");
  const valueArr: number[] = [];

  for (let i = 0; i < params.value.length; i++) {
    const value = params.value[i];
    if (value === "?") {
      countInterrogant++;
      valueArr.push(params.rules[i]);
    } else {
      valueArr.push(+value);
    }
  }

  const validValue =
    countInterrogant === 1
      ? oneInterrogant({
          indexInterrogant,
          valueArr,
          maxValue: params.maxValue,
          rules: params.rules,
        })
      : twoInterrogant({ valueArr, maxValue: params.maxValue });

  return parseTime(validValue);
};

function maximumTime(time: string): string {
  const [hours, minutes] = time.split(":");

  const validHours = getValidTime({
    rules: { 0: 2, 1: 9 },
    value: hours,
    maxValue: 23,
  });

  const validMinutes = getValidTime({
    rules: { 0: 5, 1: 9 },
    value: minutes,
    maxValue: 59,
  });

  return `${validHours}:${validMinutes}`;
}

/**
 * "19:3?"
 * max=23  : 59
 * 0-2 0-9: 0-5 0-9
 *
 * 39
 *
 *
 *
 */

function maximumTime2(time: string): string {
  let [maxHour, minHour, maxMinute, minMinute] = time
    .split(":")
    .join("")
    .split("");

  let hourFirst = maxHour;
  let hourSecond = minHour;
  let minFirst = maxMinute;
  let minSecond = minMinute;

  if (maxHour === "?") hourFirst = "2";

  if (maxMinute === "?") minFirst = "5";

  if (minMinute === "?") minSecond = "9";

  if (minHour === "?") {
    if (Number(hourFirst) < 2) {
      hourSecond = "9";
    } else {
      hourSecond = "3";
    }
  }

  if (Number(hourSecond) >= 4 && maxHour === "?") {
    hourFirst = "1";
  }

  return `${hourFirst}${hourSecond}:${minFirst}${minSecond}`;
}
