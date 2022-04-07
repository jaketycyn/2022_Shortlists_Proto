import styled, { css } from "styled-components";

export const Wrapper = styled.article`
  display: grid;

  height: 100vh;
  width: 100%;
  justify-content: center;
  text-align: center;
  //margin: auto;
  //background: ${(props) => props.theme.colors.pink};
`;

export const CardHeader = styled.header`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-items: center;
  //background: ${(props) => props.theme.colors.secondaryDark};
`;

export const CardHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 10px;
  }

  &:nth-last-of-type(2) {
    margin-top: 12px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  //padding: 7px 0;
  padding: 0.75rem 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  text-align: center;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const ShareIcon = styled.div`
  display: grid;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  margin-top: 0.75rem;
  width: 50px !important;
  height: 50px !important;

  //margin: auto seems to center the icon within the div properly
  margin: auto;
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: ${(props) => props.theme.colors.black};
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -3px);
    background-color: ${(props) => props.theme.colors.main};
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.mainBlack};
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;
