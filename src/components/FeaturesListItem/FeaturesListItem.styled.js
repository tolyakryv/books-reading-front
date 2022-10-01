import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;

  color: #898f9f;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  & > svg {
    margin-right: 12px;
  }
`;
