import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { device } from "../../helpers/device";
import bgImgMobile from "../../img/background/loginBackgroundMobile.jpg";
import bgImgMobile2x from "../../img/background/loginBackgroundMobile@2x.jpg";
import bgImgTablet from "../../img/background/loginBackgroundTablet.jpg";
import bgImgTablet2x from "../../img/background/loginBackgroundTablet@2x.jpg";
import bgImgDesktop from "../../img/background/loginBackgroundDesktop.jpg";
import bgImgDesktop2x from "../../img/background/loginBackgroundDesktop@2x.jpg";

const duration = "250ms";
const cubic = "cubic-bezier(0.4, 0, 0.2, 1)";

export const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 320px;

  @media ${device.tablet} {
    max-width: 768px;
  }

  @media ${device.desktop} {
    max-width: 1280px;
    display: flex;
  }
`;

export const LoginSection = styled.section`
  background-color: rgba(9, 30, 63, 0.8);
  background-image: linear-gradient(
      to right,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${bgImgMobile});
  background-position: center -60px;
  background-repeat: repeat-y;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgImgMobile2x});
  }

  @media ${device.tablet} {
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgImgTablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgImgTablet2x});
    }
  }

  @media ${device.desktop} {
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgImgDesktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgImgDesktop2x});
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 20px;

  @media ${device.tablet} {
    padding: 65px 185px;
  }

  @media ${device.desktop} {
    width: 550px;
    padding: 185px 75px 145px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  font-weight: 600;
  color: #ffffff;

  @media ${device.tablet} {
    padding: 40px;

    font-weight: 500;
    color: #898f9f;
    background-color: #ffffff;
  }
`;

export const ButtonStyled = styled(Button)`
  margin-top: 20px;

  @media ${device.tablet} {
    margin-top: 32px;
  }
`;

export const LinkStyled = styled(Link)`
  display: block;

  margin: 16px auto 0;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;

  color: #ff6b08;

  &:hover,
  &:focus {
    color: #d15807;
  }

  transition: color ${duration} ${cubic};

  @media ${device.tablet} {
    margin-top: 20px;
  }
`;

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  padding: 50px 45px 16px 45px;

  @media ${device.tablet} {
    padding: 126px 121px 70px 121px;
  }

  @media ${device.desktop} {
    padding: 268px 167px 266px;
  }
`;
