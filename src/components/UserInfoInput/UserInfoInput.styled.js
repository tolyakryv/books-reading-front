import styled from "styled-components";

export const Label = styled.label`
  display: block;
  font-family: "Montserrat";
  font-weight: inherit;
  font-size: 14px;
  line-height: 17px;

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

  color: #242a37;

  border: none;
  background: #f5f7fa;
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

  &::placeholder {
    color: #a6abb9;
  }
`;
