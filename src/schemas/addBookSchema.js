import * as Yup from "yup";
import { TITLE_REGEXP, AUTHOR_REGEXP } from "../helpers/regexp";
export const addBookSchema = Yup.object({
  title: Yup.string()
    .matches(TITLE_REGEXP, "поле не може розпочинатись з пробіла або дефіса")
    .max(50, "не більше 50 символів")
    .required("Обов'язкове поле"),
  author: Yup.string()
    .matches(AUTHOR_REGEXP, "Тільки літери")
    .max(50, "Не більше 50 символів")
    .required("Обов'язкове поле"),
  publicDate: Yup.number()
    .integer("Це ціле число")
    // .positive("Число більше нуля")
    .min(0, "Рік видання більше 0")
    .max(2022, "Рік виддання максимум 2022")
    .required("Вкажіть рік"),
  amountPages: Yup.number()
    .integer("кількість сторінок це ціле число")
    .positive("кількість сторінок це число більше нуля")
    .min(10, "Не менше 10 сторінок")
    .max(9999, "Не більше 9999 сторінок")
    .required("Обов'язкове поле"),
});
