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

  //test setup use tutorial setup for final version.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!listTitle) {
      displayAlert();
      return;
    }

    //can add is editing functionality later if needed
    // if (isEditing) {
    //   editUserList()
    //   return
    // }

    createUserList();

    //might put clear alert else where. This is for a nice popup notification to give user feedback. Could move this to within the reducer itself later.
    clearAlert();
    getUserCreatedLists();
  };

  const handleListInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}: ${value}`)
    handleChange({ name, value });
  };
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />

        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
          <TestWrapper className="dashboard-page">
            {/* Will be seperate userListCreation component later */}
            <form className="form">
              <div className="form-center">
                {showAlert && <Alert />}
                <FormRow
                  type="text"
                  labelText="Enter new list name"
                  name="listTitle"
                  value={listTitle}
                  handleChange={handleListInput}
                ></FormRow>
                <div className="btn-container">
                  <button
                    type="submit"
                    className="btn btn-block submit-btn"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    Create new List
                  </button>
                </div>
              </div>
            </form>
          </TestWrapper>
          <div>
            <UserListContainer />
          </div>
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
