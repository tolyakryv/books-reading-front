import { useMediaQuery } from "react-responsive";
import { Navigate } from "react-router-dom";
import { ButtonLink } from "../../components/ButtonLink";
import {
  Container,
  Title,
  FeaturesListStyled,
  ButtonsContainer,
} from "./InfoMobile.styled";

const InfoMobile = () => {
  const isNotMobile = !useMediaQuery({ maxWidth: 767 });

  if (isNotMobile) return <Navigate to="/" />;

  return (
    <section>
      <Container>
        <Title>Books Reading</Title>
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
      </Container>
      <ButtonsContainer>
        <ButtonLink
          width="130px"
          height="40px"
          text="Увійти"
          shadow={false}
          to="/login"
        />
        <ButtonLink
          width="130px"
          height="40px"
          text="Реєстрація"
          color="accent"
          to="/register"
        />
      </ButtonsContainer>
    </section>
  );
};

export default InfoMobile;
