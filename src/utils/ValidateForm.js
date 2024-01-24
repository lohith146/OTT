export const validateForm = (name, email, password) => {
  console.log(name);
  console.log(email);
  console.log(password);
  const validateName = /^[A-Za-z][A-Za-z0-9_]{4,14}$/.test(name);
  const validateEmail =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!validateName) return "Invalid Name";
  if (!validateEmail) return "Invalid Email";
  if (!validatePassword) return "Invalid Password";
  return null;
};
