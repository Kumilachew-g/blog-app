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

export const passwordValidate = {
  required: {
    value: true,
    message: "Password is required",
  },
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters",
  },
  maxLength: {
    value: 20,
    message: "Password must not exceed 20 characters",
  },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message:
      "Password must contain at least 1 uppercase, 1 lowercase and 1 number",
  },
};

export const emailValidate = {
  required: {
    value: true,
    message: "Email is required",
  },
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Email is invalid",
  },
};
