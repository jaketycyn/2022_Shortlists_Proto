import styled, { css } from "styled-components";

export const ItemWrapper = styled.article`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-areas: "main secondary";
  grid-gap: 1em;
  background: ${(props) => props.theme.colors.white};
  border-style: solid;
  border-radius: 1rem;
  border-color: ${(props) => props.theme.colors.secondaryBrownDark};
  /* margin: 10px 50px 20px; */
  //text
  text-align: center;
  height: 7rem;
  margin: 1rem 2rem;

  //basesetup/paramets of cards

  @media (max-width: 1120px) {
    grid-template-columns: 3fr 1fr 1fr;
    margin: 0.5rem 1rem;
  }

  .main {
    grid-area: main;
    font-size: 2rem;
    margin: 5px 5px;
    background: ${(props) => props.theme.colors.mainYellow};
    place-self: center stretch;
  }
  .secondary {
    grid-column: 2 / 4;
    display: grid;
    grid-template-columns: subgrid;
    grid-template-areas: "share delete";
    margin: 5px 5px;
    place-self: center stretch;
  }

  //icon margins change when swapping fast between model sizes will need to setup hard fixtures for ipads in future
  .delete {
    height: 5rem;
    width: 5rem;

    @media (max-width: 1120px) {
      height: 3rem;
      width: 3rem;
      margin-top: 1rem;
    }
  }
`;

export const ItemHeader = styled.div`
  /* display: grid; */
  font-size: 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
`;

// export const CardHeading = styled.h1`
//   font-weight: bold;
//   text-align: center;
// `;

// export const CardBody = styled.div`
//   padding-right: 32px;
//   padding-left: 32px;
// `;

// export const CardFieldset = styled.fieldset`
//   position: relative;
//   padding: 0;
//   margin: 0;
//   border: 0;

//   & + & {
//     margin-top: 10px;
//   }

//   &:nth-last-of-type(2) {
//     margin-top: 12px;
//   }

//   &:last-of-type {
//     text-align: center;
//   }
// `;

// export const CardInput = styled.input`
//   //padding: 7px 0;
//   padding: 0.75rem 0;
//   width: 100%;
//   font-family: inherit;
//   font-size: 14px;
//   text-align: center;
//   border-top: 0;
//   border-right: 0;
//   border-bottom: 1px solid #ddd;
//   border-left: 0;
//   transition: border-bottom-color 0.25s ease-in;

//   &:focus {
//     border-bottom-color: #e5195f;
//     outline: 0;
//   }
// `;

export const ItemIcon = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  margin-top: 0.75rem;
  &:hover {
    color: ${(props) => props.theme.colors.mainDark};
  }
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
