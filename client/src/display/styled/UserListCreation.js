import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  background: ${(props) => props.theme.colors.main};
  font-size: 2em;
  align-items: center;
  justify-content: center;
`;

export const CardBody = styled.div`
  padding-right: 1em;
  padding-left: 1em;
`;

export const CardFieldset = styled.fieldset`
  position: relative;

  width: 450px;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  text-align: center;
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  @media (max-width: 1120px) {
    width: 20em;
  }
  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;
