import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import {
  Navbar,
  BigSidebar,
  SmallSidebar,
  FormRow,
  Alert,
  UserListContainer,
} from "../../components";

import styled from "styled-components";
import { useAppContext } from "../../context/appContext";

import UserListCreation from "../../components/UserListCreation";

const SharedLayout = () => {
  const {
    isLoading,
    clearAlert,
    displayAlert,
    showAlert,
    listTitle,
    handleChange,
    createUserList,
    getUserCreatedLists,
  } = useAppContext();

  return (
    <Wrapper>
      <main className="dashboard">
        {/* 
        //?Will add in the future but not needed for now
        <SmallSidebar />
        <BigSidebar />
        <Navbar />
        //TODO later will use outlet
        <Outlet />
        */}

        <UserListCreation />
        <div>
          <UserListContainer />
        </div>
      </main>
    </Wrapper>
  );
};

const TestWrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  background: red;
`;

export default SharedLayout;
