const parseDate = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ms: date.getMilliseconds(),
  };
};

export default parseDate;
