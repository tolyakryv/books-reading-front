import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useFormik } from "formik";
import operation from "../../redux/operation/auth-operation";
import { userSelector } from "../../redux/selector/user-selector";
import { registerSchema } from "../../schemas/registerSchema";
import { UserInfoInput } from "../../components/UserInfoInput";
import { GoogleLink } from "../../components/GoogleLink";
import { ReactComponent as GoogleIcon } from "../../img/google icon.svg";
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
  FeaturesListStyled,
  InfoSection,
} from "./Register.styled.js";

const Register = () => {
  const dispatch = useDispatch();
  const isNotMobile = !useMediaQuery({ maxWidth: 767 });

  const isLoading = useSelector(userSelector.getIsLoading);

  const handleSubmit = (data) => {
    dispatch(operation.register(data));
  };

  const resetPaste = (event) => event.preventDefault();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
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
              link="https://books-reading-back.vercel.app/api/auth/google"
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
                type="text"
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
                maxLength={30}
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
                onPaste={resetPaste}
                maxLength={30}
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
      {isNotMobile && (
        <InfoSection>
          <InfoContainer>
            <Title>Books Reading</Title>
            <div>
              <FeaturesListStyled
                title="Допоможе вам"
                features={[
                  "Швидше сформулювати свою ціль і розпочати читати",
                  "Пропорційно розподілити навантаження на кожний день",
                  "Відстежувати особистий успіх",
                ]}
              />
              <FeaturesListStyled
                title="Також ви зможете "
                features={[
                  "Формувати особисту думку незалежну від інших",
                  "Підвищити свої професійні якості опираючись на нові знання",
                  "Стати цікавим співрозмовником",
                ]}
              />
            </div>
          </InfoContainer>
        </InfoSection>
      )}
    </PageContainer>
  );
};

export default Register;
