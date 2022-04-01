import styled from "styled-components";
import Modal from "styled-react-modal";

//all props will appear green cause of styled-react-modal
const DeletionModal = Modal.styled`
    width: 20rem;
    height: 20rem;
    display: grid;
    margin: 1rem 2 rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #1C1A1B;
    opacity: ${(props) => props.opacity};
    transition : all 0.3s ease-in-out;

    h4 {
        // background-color: purple;
        color: white;
        margin: 2rem 0;
    }

    button {
        width: 12rem;
        height: 4rem;
        margin: 10px 50px 20px;
    }

    button.delete  {
        background-color: red;
        color: white;
        margin: 10px 50px 20px;
    }
    
    button.close {
        
    }
`;
export default DeletionModal;
