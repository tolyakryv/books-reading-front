import styled from "styled-components";
import { device } from "../../helpers/device";

export const Blockquote = styled.blockquote`
  position: relative;

  margin: 0;
  text-align: center;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;

  color: var(--color-main);

  &:before {
    content: "“";
    position: absolute;
    width: 100px;
    top: -36px;
    left: 50%;
    transform: translate(-50%, 0);

    margin: auto;

    font-family: "Abril Fatface";
    font-size: 59px;
    line-height: 1;

    color: var(--color-main-accent);

    @media ${device.tablet} {
      top: -62px;
      font-size: 69px;
      line-height: 1.47;
    }

    @media ${device.desktop} {
      top: -62px;
      font-size: 69px;
      line-height: 1.47;
    }
  }

  &:after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;

    margin-top: 16px;
    margin-bottom: 12px;
    margin-left: auto;
    margin-right: auto;

    background-color: rgba(36, 42, 55, 0.5);

    @media ${device.tablet} {
      width: 150px;

      margin-top: 20px;
    }
  }

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 1.58;
  }
`;

export const Cite = styled.cite`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;

  color: #898f9f;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 1.2;
  }
`;
