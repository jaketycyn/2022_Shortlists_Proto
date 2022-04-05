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
    background-color: ${(props) => props.theme.colors.mainWhite};
    opacity: ${(props) => props.opacity};
    transition : all 0.3s ease-in-out;

    h4 {
        // background-color: purple;
        color: ${(props) => props.theme.colors.textColor};
        margin: 2rem 0;
    }

    button {
        width: 12rem;
        height: 4rem;
        margin: 10px 50px 20px;     
        

        &:hover {
            box-shadow: 0 0 rgba(0, 0, 0, 0.55);
        }
    }

    button.delete  {
        &:hover {
            background-color: ${(props) => props.theme.colors.errorRed};
        }
        background-color: ${(props) => props.theme.colors.white};
        color: black;
        
    }
    
    button.close {
        background-color: ${(props) => props.theme.colors.white};
        &:hover {
            background-color: ${(props) => props.theme.colors.secondary};
        }
    }
`;
export default DeletionModal;
