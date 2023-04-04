const checkPassword = (value, object) => {
  if (
    checkRegEx(value, /\s/g, object.spaces) &&
    checkRegEx(value, /[a-z]/g, object.lowerCase) &&
    checkRegEx(value, /[A-Z]/g, object.upperCase) &&
    checkRegEx(value, /\d/g, object.number) &&
    checkSymbols(value, /\W/g, object.symbol)
  ) {
    return true;
  } else {
    return false;
  }
};
const checkRegEx = (value, regex, n) => {
  if (value.match(regex) != null) {
    if (n == 0) {
      return false;
    }
    if (value.match(regex).length < n) {
      return false;
    }
  }
  if (value.match(regex) == null && n > 0) {
    return false;
  } else {
    return true;
  }
};
const checkSymbols = (value, regex, n) => {
  const listWOSpaces = [];
  if (value.match(regex) != null) {
    value.match(regex).forEach((ex) => {
      if (ex != ' ') {
        listWOSpaces.push(ex);
      }
    });
    if (listWOSpaces.length < n) {
      return false;
    }
    if (listWOSpaces.length && n == 0) {
      return false;
    }
  }
  if (value.match(regex) == null && n > 0) {
    return false;
  } else {
    return true;
  }
};
export default checkPassword;
