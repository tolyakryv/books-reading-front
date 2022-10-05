import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  display: block;
  font-family: "Montserrat";
  font-weight: inherit;
  font-size: 14px;
  line-height: 1.21;

  text-align: left;

  color: inherit;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Star = styled.span`
  color: #f25137;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 42px;

  margin-top: 8px;
  padding: 12px 8px;

  font-family: "Montserrat";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;

  color: var(--color-main);

  border: none;
  background: var(--color-background);
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

  &::placeholder {
    color: var(--color-secondary);
  }
`;

export const Error = styled.p`
  position: absolute;
  right: 0;
  bottom: -28px;

  font-family: "Montserrat";
  font-weight: 400;
  font-size: 12px;
  line-height: 1.21;

  color: red;
`;
