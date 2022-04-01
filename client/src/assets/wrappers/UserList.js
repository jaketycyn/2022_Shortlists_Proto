import styled from "styled-components";

const Wrapper = styled.article`
  //grid
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  grid-template-areas: "main secondary";
  grid-gap: 1em;
  background: ${(props) => props.theme.colors.mainWhite};
  /* margin: 10px 50px 20px; */
  //text
  text-align: center;
  height: 7em;
  margin: 1em 2em;

  //basesetup/paramets of cards

  /* @media (min-width: 576px) {
    grid-template-columns: 3fr 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 3fr 1fr 1fr;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 3fr 1fr 1fr;
  } */

  //generic hover
  &:hover {
    box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.55);
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

  .share {
    //background: ${(props) => props.theme.colors.mainBlue};
    height: 5em;
    width: 5em;
  }
  .delete {
    //background: ${(props) => props.theme.colors.errorRed};
    height: 5em;
    width: 5em;
  }
`;

export default Wrapper;
