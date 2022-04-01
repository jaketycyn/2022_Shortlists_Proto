import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import {
  Navbar,
  BigSidebar,
  SmallSidebar,
  UserListContainer,
} from "../../components";

import styled from "styled-components";

import UserListCreation from "../../components/UserListCreation";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main>
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

export default SharedLayout;
