import * as Yup from "yup";
import { inputErrors } from "../helpers/errors";
import { EMAIL_REGEXP, NAME_REGEXP, PASSWORD_REGEXP } from "../helpers/regexp";

export const registerSchema = Yup.object({
  name: Yup.string(inputErrors.MISTAKE)
    .matches(NAME_REGEXP, inputErrors.MISTAKE)
    .min(3, inputErrors.MISTAKE)
    .max(100, inputErrors.MISTAKE)
    .required(inputErrors.REQUIRED),

  email: Yup.string(inputErrors.MISTAKE)
    .matches(EMAIL_REGEXP, inputErrors.MISTAKE)
    .min(10, inputErrors.MISTAKE)
    .max(63, inputErrors.MISTAKE)
    .required(inputErrors.REQUIRED),

  password: Yup.string(inputErrors.MISTAKE)
    .matches(PASSWORD_REGEXP, inputErrors.MISTAKE)
    .min(6, inputErrors.MISTAKE)
    .max(30, inputErrors.MISTAKE)
    .required(inputErrors.REQUIRED),

  confirmPassword: Yup.string(inputErrors.MISTAKE)
    .oneOf([Yup.ref("password"), null], inputErrors.MATCH)
    .required(inputErrors.REQUIRED),
});
