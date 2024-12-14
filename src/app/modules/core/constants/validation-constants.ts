export const PASSWORD_VALIDATION_RULES = [
  {
    regex: /[A-Z]/,
    errorMessage: 'Password must include uppercase letters'
  },
  {
    regex: /[a-z]/,
    errorMessage: 'Password must include lowercase letters'
  },
  {
    regex: /\d/,
    errorMessage: 'Password must include numbers'
  },
  {
    regex: /[!@#$%^&*(),.?":{}|<>]/,
    errorMessage: 'Password must include special characters'
  },
  {
    regex: /^.{8,}$/,
    errorMessage: 'Password must include 8 characters'
  }
];
