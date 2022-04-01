import styled from "styled-components";

const Wrapper = styled.section`
  //background: ${(props) => props.theme.colors.mainGreen};
  text-align: center;
  .list-total-display {
    //background-color: pink;
    font-size: 2em;
  }

  .mapTest {
    //background: ${(props) => props.theme.colors.mainOrange};
    grid: display;
    grid-template-columns: repeat(2, auto);

    grid-gap: 3em;
  }
`;
export default Wrapper;
