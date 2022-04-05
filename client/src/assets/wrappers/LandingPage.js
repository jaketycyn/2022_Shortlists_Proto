import styled from "styled-components";

const Wrapper = styled.main`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;

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
export default Wrapper;
