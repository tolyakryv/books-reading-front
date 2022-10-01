import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useFormik } from "formik";
import { useEffect } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { UserInfoInput } from "../../components/UserInfoInput";
import { GoogleLink } from "../../components/GoogleLink";
import { FeaturesList } from "../../components/FeaturesList/FeaturesList";
import { ReactComponent as GoogleIcon } from "../../img/google icon.svg";
import operation from "../../redux/operation/auth-operation";
import { userSelector } from "../../redux/selector/user-selector";
import { inputErrors } from "../../helpers/errors";
import {
  PageContainer,
  Container,
  Form,
  ButtonStyled,
  LinkStyled,
  RegisterSection,
  InfoContainer,
  Title,
  LoginLink,
} from "./Register.styled.js";
import "react-toastify/dist/ReactToastify.css";

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const PASSWORD_REGEXP = /^[a-zA-Z0-9]{6,30}$/;

export const Register = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const isLoading = useSelector(userSelector.getIsLoading);
  const error = useSelector(userSelector.getError);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  const handleSubmit = (data) => {
    dispatch(operation.register(data));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string(inputErrors.MISTAKE)
        .min(3, inputErrors.MISTAKE)
        .max(100, inputErrors.MISTAKE)
        .required(inputErrors.REQUIRED),

      email: Yup.string(inputErrors.MISTAKE)
        .matches(EMAIL_REGEXP, inputErrors.MISTAKE)
        .required(inputErrors.REQUIRED),

      password: Yup.string(inputErrors.MISTAKE)
        .matches(PASSWORD_REGEXP, inputErrors.MISTAKE)
        .required(inputErrors.REQUIRED),

      confirmPassword: Yup.string(inputErrors.MISTAKE)
        .oneOf([Yup.ref("password"), null], inputErrors.MATCH)
        .required(inputErrors.REQUIRED),
    }),
    onSubmit: handleSubmit,
  });

  const isDisabled =
    Boolean(
      formik.errors.email ||
        formik.errors.password ||
        formik.errors.name ||
        formik.errors.confirmPassword
    ) || isLoading;

  return (
    <PageContainer>
      <RegisterSection>
        <Container>
          <Form onSubmit={formik.handleSubmit}>
            <GoogleLink
              icon={<GoogleIcon />}
              text="Google"
              link="https://book-reading-08.herokuapp.com/api/auth/google"
            />

            <div>
              <UserInfoInput
                type="text"
                text="Ім’я"
                placeholder="..."
                required={true}
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                errorText={formik.errors.name}
                showError={formik.touched.name}
                onBlur={formik.handleBlur}
              />
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
                placeholder="..."
                required={true}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                errorText={formik.errors.password}
                showError={formik.touched.password}
                onBlur={formik.handleBlur}
              />
              <UserInfoInput
                type="password"
                text="Підтвердити пароль"
                placeholder="..."
                required={true}
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                errorText={formik.errors.confirmPassword}
                showError={formik.touched.confirmPassword}
                onBlur={formik.handleBlur}
              />
            </div>
            <ButtonStyled
              text="Зареєструватися"
              color="accent"
              textSize="big"
              type="submit"
              disabled={isDisabled}
            />
            <LoginLink to="/login">
              Вже з нами? <LinkStyled>Увійти</LinkStyled>
            </LoginLink>
          </Form>
        </Container>
      </RegisterSection>
      {!isMobile ? (
        <section>
          <InfoContainer>
            <Title>Books Reading</Title>
            <FeaturesList
              title="Допоможе вам"
              features={[
                "Швидше сформулювати свою ціль і розпочати читати",
                "Пропорційно розподілити навантаження на кожний день",
                "Відстежувати особистий успіх",
              ]}
            />
            <FeaturesList
              title="Також ви зможете "
              features={[
                "Формувати особисту думку незалежну від інших",
                "Підвищити свої професійні якості опираючись на нові знання",
                "Стати цікавим співрозмовником",
              ]}
            />
          </InfoContainer>
        </section>
      ) : (
        <></>
      )}
    </PageContainer>
  );
};
