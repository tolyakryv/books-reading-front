import * as Yup from "yup";
import { inputErrors } from "../helpers/errors";
import { EMAIL_REGEXP, PASSWORD_REGEXP } from "../helpers/regexp";

export const loginSchema = Yup.object({
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
});
