import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { FeaturesList } from "../../components/FeaturesList/FeaturesList";
import { device } from "../../helpers/device";
import bgImgMobile from "../../img/background/registerBackgroundMobile.jpg";
import bgImgMobile2x from "../../img/background/registerBackgroundMobile@2x.jpg";
import bgImgMobile3x from "../../img/background/registerBackgroundMobile@3x.jpg";
import bgImgTablet from "../../img/background/registerBackgroundTablet.jpg";
import bgImgTablet2x from "../../img/background/registerBackgroundTablet@2x.jpg";
import bgImgTablet3x from "../../img/background/registerBackgroundTablet@3x.jpg";
import bgImgDesktop from "../../img/background/loginBackgroundDesktop.jpg";
import bgImgDesktop2x from "../../img/background/loginBackgroundDesktop@2x.jpg";
import bgImgDesktop3x from "../../img/background/loginBackgroundDesktop@3x.jpg";

export const PageContainer = styled.div`
  margin: 0 auto;

  @media ${device.desktop} {
    display: flex;
    justify-content: center;
  }
`;

export const RegisterSection = styled.section`
  width: 100%;
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

  @media screen and (min-width: 321px) {
    background-size: cover;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgImgMobile2x});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgImgMobile3x});
    }
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

  @media screen and (min-width: 769px) {
    background-size: cover;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgImgTablet2x});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgImgTablet3x});
    }
  }

  @media ${device.desktop} {
    width: 43%;
    flex-shrink: 0;
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

  @media screen and (min-width: 1281px) {
    width: 43%;
    background-size: cover;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgImgDesktop2x});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgImgDesktop3x});
    }
  }
`;

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 20px 44px;

  @media ${device.tablet} {
    max-width: 768px;
    padding: 65px 185px;
  }

  @media ${device.desktop} {
    width: 550px;
    padding: 90px 75px;
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
    background-color: var(--color-secondary-background);
  }
`;

export const ButtonStyled = styled(Button)`
  margin-top: 20px;

  @media ${device.tablet} {
    margin-top: 35px;
  }
`;

export const LoginLink = styled(Link)`
  display: block;

  margin: 16px auto 0;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;

  text-decoration: none;
  color: #898f9f;

  &:hover,
  &:focus {
    color: var(--color-main-accent);
    text-decoration: none;

    span {
      color: inherit;
    }
  }

  transition: color var(--duration) var(--cubic);

  @media ${device.tablet} {
    margin-top: 20px;
  }
`;

export const LinkStyled = styled.span`
  text-decoration: underline;
  color: #ff6b08;

  transition: color var(--duration) var(--cubic);

  @media ${device.tablet} {
    margin-top: 20px;
  }
`;

export const InfoSection = styled.section`
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 64px 145px 88px;

  @media ${device.desktop} {
    padding: 180px 126px 240px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 48px;

  text-align: center;

  font-family: "Abril Fatface";
  font-weight: 400;
  font-size: 34px;
  line-height: 1.12;

  color: var(--color-main);
`;

export const FeaturesListStyled = styled(FeaturesList)`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;
