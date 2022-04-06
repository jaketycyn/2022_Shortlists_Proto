import { Outlet } from "react-router-dom";
import Wrapper from "../../display/styled/SharedLayout.js";
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

        <div>
          <UserListContainer />
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
