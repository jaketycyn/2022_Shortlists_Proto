import styled from "styled-components";

const Wrapper = styled.article`
  //grid

  grid-gap: 1em;
  background: ${(props) => props.theme.colors.mainPink};
  /* margin: 10px 50px 20px; */
  //text
  text-align: center;

  .list-input {
    background: ${(props) => props.theme.colors.white};
    display: grid;
    border-style: solid;
    background-color: ${(props) => props.theme.colors.secondary};
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 1200px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &:hover {
    box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.55);
  }
`;

export default Wrapper;
