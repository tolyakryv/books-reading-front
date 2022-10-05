import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useGoogle } from "../../hooks/useGoogle.js";
import operation from "../../redux/operation/auth-operation.js";
import { userSelector } from "../../redux/selector/user-selector.js";
import { UserInfoInput } from "../../components/UserInfoInput";
import { Quote } from "../../components/Quote";
import { GoogleLink } from "../../components/GoogleLink";
import { loginSchema } from "../../schemas/loginSchema.js";
import quotes from "../../data/quotes.json";

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
import { getRandomInt } from "../../helpers/getRandomInt.js";
import { useEffect, useState } from "react";

const Login = () => {
  const [quote, setQuote] = useState(null);

  const dispatch = useDispatch();
  const isLoading = useSelector(userSelector.getIsLoading);

  useGoogle();

  useEffect(() => {
    setQuote(quotes[getRandomInt(0, quotes.length)]);
  }, []);

  const handleSubmit = (data) => {
    dispatch(operation.logIn(data));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
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
          <Quote text={quote?.text} author={quote?.author} />
        </QuoteContainer>
      </section>
    </PageContainer>
  );
};

export default Login;
