export type PasswordPolicyStatus = {
  hasMinimumLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  isValid: boolean;
};

export const PASSWORD_MIN_LENGTH = 10;

export const PASSWORD_REQUIREMENTS: Array<{
  key: keyof Omit<PasswordPolicyStatus, "isValid">;
  label: string;
}> = [
  { key: "hasMinimumLength", label: "At least 10 characters" },
  { key: "hasUppercase", label: "One uppercase letter" },
  { key: "hasLowercase", label: "One lowercase letter" },
  { key: "hasNumber", label: "One number" },
];

const uppercaseLetter = /\p{Lu}/u;
const lowercaseLetter = /\p{Ll}/u;
const decimalNumber = /\p{Nd}/u;

export function validatePasswordPolicy(
  password: string
): PasswordPolicyStatus {
  const status = {
    hasMinimumLength: Array.from(password).length >= PASSWORD_MIN_LENGTH,
    hasUppercase: uppercaseLetter.test(password),
    hasLowercase: lowercaseLetter.test(password),
    hasNumber: decimalNumber.test(password),
  };

  return {
    ...status,
    isValid:
      status.hasMinimumLength &&
      status.hasUppercase &&
      status.hasLowercase &&
      status.hasNumber,
  };
}

export const PASSWORD_POLICY_ERROR =
  "Password must be at least 10 characters and include uppercase, lowercase, and a number.";
