import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.main`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.mainLight};

  .info {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const CardFieldset = styled.fieldset`
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
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

export const CardButton = styled.button`
  background-color: ${(props) => props.theme.colors.grey};
  display: block;
  width: 100%;
  padding: 1rem 1rem;
  font-family: inherit;
  font-size: 2rem;
  font-weight: 700;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.46);
    transform: translate(0, -3px);
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.pink};
  }
`;

export const CardLink = styled(Link)`
  display: inline-block;
  cursor: pointer;
  /* transition: color 0.25s ease-in; */
  color: ${(props) => props.theme.colors.white};
  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;
