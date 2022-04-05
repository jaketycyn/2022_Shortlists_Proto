import styled from "styled-components";

const ItemWrapper = styled.article`
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

export default ItemWrapper;
