export const usernameValidate = {
  required: {
    value: true,
    message: "Username is required",
  },
  minLength: {
    value: 6,
    message: "Username must be at least 6 characters",
  },
  maxLength: {
    value: 20,
    message: "Username must not exceed 20 characters",
  },
  pattern: {
    value: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
    message: "Username must not contain special characters",
  },
};
