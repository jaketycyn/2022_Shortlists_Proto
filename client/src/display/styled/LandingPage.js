import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.main`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.main};

  .info {
    margin-bottom: 2vw;
    width: 100%;
    position: relative;
    min-height: 50vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;

    background-color: ${(props) => props.theme.colors.secondary};
  }

  .link-register {
    //background-color: pink;
    font-size: 2em;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export const CardFieldset = styled.fieldset`
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
  display: block;
  width: 100%;
  padding: 1rem 1rem;
  font-family: inherit;
  font-size: 2rem;
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.mainWhite};
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.46);
    transform: translate(0, -3px);
    background-color: ${(props) => props.theme.colors.mainLight};
  }
`;

export const CardLink = styled(Link)`
  display: inline-block;
  cursor: pointer;
  /* transition: color 0.25s ease-in; */

  &:hover {
    color: ${(props) => props.theme.colors.mainWhite};
  }
`;
