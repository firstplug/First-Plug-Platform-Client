export const emailValidator = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value.match(emailRegex)) {
    return "Enter a valid email address.";
  }
  return null;
};

export const passwordValidator = (value) => {
  if (value.length < 6) {
    return "The password must be at least 6 characters long.";
  }
  return null;
};

export const fullNameValidator = (value) => {
  if (value.length < 1) {
    return "This field is required";
  }
  return null;
};
