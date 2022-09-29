import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
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

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const PASSWORD_REGEXP = /^[a-zA-Z0-9]{6,30}$/;

export const Login = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(userSelector.getIsLoading);
  const error = useSelector(userSelector.getError);

  const handleSubmit = (data) => {
    dispatch(operation.logIn(data));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(EMAIL_REGEXP, "Поле містить помилку")
        .required("Required"),
      password: Yup.string()
        .matches(PASSWORD_REGEXP, "Поле містить помилку")
        .required("Required"),
    }),
    onSubmit: handleSubmit,
  });

  const isDisabled =
    Boolean(formik.errors.email || formik.errors.password) || isLoading;

  console.log(error);

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
              />
              <UserInfoInput
                type="password"
                text="Пароль"
                placeholder="Пароль"
                required={true}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
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
