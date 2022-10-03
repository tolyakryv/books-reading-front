import { useMediaQuery } from "react-responsive";
import { Navigate } from "react-router-dom";
import { Button } from "../../components/Button";
import {
  Container,
  Title,
  FeaturesListStyled,
  ButtonsContainer,
} from "./InfoMobile.styled";

export const InfoMobile = () => {
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
        <Button
          width="130px"
          height="40px"
          text="Увійти"
          shadow={false}
          as="a"
          href="/login"
        />
        <Button
          width="130px"
          height="40px"
          text="Реєстрація"
          color="accent"
          as="a"
          href="/register"
        />
      </ButtonsContainer>
    </section>
  );
};
