const CheckEmail = (value) => {
  const email = value.match(/\w+@{1}\w+\.{1}(\w{4}|\w{3}|\w{2})|./g);
  if (email == null) {
    return false;
  }
  if (email != null) {
    return email.length == 1 ? true : false;
  }
};
export default CheckEmail;
