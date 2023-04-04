const checkUser = (value, object) => {
  if (
    checkRegExUser(value, /\s/g, object.spaces) &&
    checkRegExUser(value, /[a-z]/g, object.lowerCase) &&
    checkRegExUser(value, /[A-Z]/g, object.upperCase) &&
    checkRegExUser(value, /\d/g, object.number) &&
    checkSymbolsUser(value, /\W/g, object.symbol)
  ) {
    return checkForbidden(value, object.forbidden);
  } else {
    return [false];
  }
};

const checkRegExUser = (value, regex, n) => {
  if (value.match(regex) != null && n == 0) {
    return false;
  }
  if (value.match(regex) == null && n == 1) {
    return false;
  } else {
    return true;
  }
};
const checkSymbolsUser = (value, regex, n) => {
  const listWOSpaces = [];
  if (value.match(regex) != null) {
    value.match(regex).forEach((ex) => {
      if (ex != ' ') {
        listWOSpaces.push(ex);
      }
    });
    if (listWOSpaces.length && n == 0) {
      return false;
    }
  }
  if (value.match(regex) == null && n == 1) {
    return false;
  } else {
    return true;
  }
};
const checkForbidden = (value, forbbidenList) => {
  const list = [];
  forbbidenList.forEach((forbidden) => {
    const word = new RegExp(forbidden, 'i');
    if (checkRegExUser(value, word, 0) == false) {
      list.push(forbidden);
    }
  });
  return list.length == 0 ? [true] : [false, list[0]];
};
export default checkUser;
