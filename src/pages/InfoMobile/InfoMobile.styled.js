import styled from "styled-components";
import { FeaturesList } from "../../components/FeaturesList/FeaturesList";

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 32px 25px 30px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 32px;

  text-align: center;

  font-family: "Abril Fatface";
  font-weight: 400;
  font-size: 34px;
  line-height: 1.12;

  color: #242a37;
`;

export const FeaturesListStyled = styled(FeaturesList)`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 320px;
  margin: 0 auto;
  padding: 30px 20px 40px;
`;
