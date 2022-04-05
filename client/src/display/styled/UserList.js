import styled from "styled-components";

const Wrapper = styled.article`
  //grid
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
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

  //generic hover
  &:hover {
    box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.55);
  }

  .main {
    grid-area: main;
    font-size: 2rem;
    font-weight: 600;
    margin: 5px 5px;
    background: ${(props) => props.theme.colors.white};
    place-self: center stretch;

    @media (max-width: 1120px) {
      font-size: 1.5rem;
    }
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
    //downsizing icons for phones/tablets
    @media (max-width: 1120px) {
      height: 3em;
      width: 3em;
    }
  }
  .delete {
    //background: ${(props) => props.theme.colors.errorRed};
    height: 5em;
    width: 5em;
    //downsizing icons for phones/tablets
    @media (max-width: 1120px) {
      height: 3em;
      width: 3em;
    }
  }
`;

export default Wrapper;
