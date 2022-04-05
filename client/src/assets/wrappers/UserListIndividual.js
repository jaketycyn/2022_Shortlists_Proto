import styled from "styled-components";

const Wrapper = styled.article`
  //grid
  background-color: ${(props) => props.theme.colors.mainOrange};
  /* margin: 10px 50px 20px; */
  //text

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
  /* 
  // can be used for individual items later
  .share {
    //background: ${(props) => props.theme.colors.mainBlue};
    height: 5em;
    width: 5em;
  }
  .delete {
    //background: ${(props) => props.theme.colors.errorRed};
    height: 5em;
    width: 5em;
  } */
`;

export default Wrapper;
