import Modal from "styled-react-modal";

//all props will appear green cause of styled-react-modal
const SendToModal = Modal.styled`
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

    .center-align {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 5px 5px;
    }

    h4 {
        // background-color: purple;
        color: ${(props) => props.theme.colors.textColor};
        margin: 2rem 0;
    }

    button {
        width: 12rem;
        height: 4rem;
        margin: 10px 50px 20px;     
        border: 5px 5px;  

        &:hover {
            box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.55);
        }
    }

    button.delete  {
        background-color: ${(props) => props.theme.colors.errorRed};
        color: white;
        
    }
    
    button.close {
        background-color: ${(props) => props.theme.colors.mainWhite};
       
    }
`;
export default SendToModal;
