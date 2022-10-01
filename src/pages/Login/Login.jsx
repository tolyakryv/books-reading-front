import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import operation from "../../redux/operation/auth-operation.js";
import { userSelector } from "../../redux/selector/user-selector.js";
import { UserInfoInput } from "../../components/UserInfoInput";
import { Quote } from "../../components/Quote";
import { GoogleLink } from "../../components/GoogleLink";
import { ReactComponent as GoogleIcon } from "../../img/google icon.svg";
import {
  PageContainer,
  Container,
  Form,
  ButtonStyled,
  LinkStyled,
  LoginSection,
  QuoteContainer,
} from "./Login.styled.js";
import { inputErrors } from "../../helpers/errors.js";

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const PASSWORD_REGEXP = /^[a-zA-Z0-9]{6,30}$/;

const schema = Yup.object({
  email: Yup.string(inputErrors.MISTAKE)
    .matches(EMAIL_REGEXP, inputErrors.MISTAKE)
    .required(inputErrors.REQUIRED),
  password: Yup.string(inputErrors.MISTAKE)
    .matches(PASSWORD_REGEXP, inputErrors.MISTAKE)
    .required(inputErrors.REQUIRED),
});

export const Login = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(userSelector.getIsLoading);
  const error = useSelector(userSelector.getError);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  const handleSubmit = (data) => {
    dispatch(operation.logIn(data));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  const isDisabled =
    Boolean(formik.errors.email || formik.errors.password) || isLoading;

  return (
    <PageContainer>
      <LoginSection>
        <Container>
          <Form onSubmit={formik.handleSubmit}>
            <GoogleLink
              icon={<GoogleIcon />}
              text="Google"
              link="https://book-reading-08.herokuapp.com/api/auth/google"
            />

            <div>
              <UserInfoInput
                type="email"
                text="Електронна адреса"
                placeholder="your@email.com"
                required={true}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                errorText={formik.errors.email}
                showError={formik.touched.email}
                onBlur={formik.handleBlur}
              />
              <UserInfoInput
                type="password"
                text="Пароль"
                placeholder="Пароль"
                required={true}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                errorText={formik.errors.password}
                showError={formik.touched.password}
                onBlur={formik.handleBlur}
              />
            </div>
            <ButtonStyled
              text="Увійти"
              color="accent"
              textSize="big"
              type="submit"
              disabled={isDisabled}
            />
            <LinkStyled to="/register">Реєстрація</LinkStyled>
          </Form>
        </Container>
      </LoginSection>
      <section>
        <QuoteContainer>
          <Quote
            text=" Книги — это корабли мысли, странствующие по волнам времени и бережно
            несущие свой драгоценный груз от поколения к поколению."
            author="Бэкон Ф."
          />
        </QuoteContainer>
      </section>
    </PageContainer>
  );
};
