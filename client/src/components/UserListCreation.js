import { useAppContext } from "../pages/context/appContext";

import {
  Wrapper,
  CardBody,
  CardFieldset,
  CardInput,
} from "../display/styled/UserListCreation";
import { Alert, FormRow } from ".";

const UserListCreation = () => {
  const {
    isLoading,
    logoutUser,
    clearAlert,
    displayAlert,
    showAlert,
    listTitle,
    handleChange,
    createUserList,
    getUserCreatedLists,
  } = useAppContext();

  //test setup use tutorial setup for final version.
  const handleSubmit = async (e) => {
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

    await createUserList();

    //might put clear alert else where. This is for a nice popup notification to give user feedback. Could move this to within the reducer itself later.
    await clearAlert();
    await getUserCreatedLists();
  };

  const handleSubmitSocialList = async (e) => {
    e.preventDefault();
    if (!listTitle) {
      displayAlert();
      setTimeout(5000);
      return;
    }

    //can add is editing functionality later if needed
    // if (isEditing) {
    //   editUserList()
    //   return
    // }
    console.log("inside social list creation");
    // await createUserList();

    // //might put clear alert else where. This is for a nice popup notification to give user feedback. Could move this to within the reducer itself later.
    await clearAlert();
    // await getUserCreatedLists();
  };

  const handleListInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}: ${value}`)
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      {/* Will be seperate userListCreation component later */}

      <CardBody>
        <form>
          <CardFieldset>
            {showAlert && <Alert />}
            <CardInput
              placeholder="Enter a new list name"
              type="text"
              labelText="Enter new list name"
              name="listTitle"
              value={listTitle}
              onChange={handleListInput}
            />
            <div className="btn-container">
              <button
                type="submit"
                className="submit-btn"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                Create Classic List
              </button>
              <button
                type="submit"
                className="submit-btn"
                onClick={handleSubmitSocialList}
                disabled={isLoading}
              >
                Create Social List
              </button>
              {/*Logout button test which will be removed later just keeping now for easy tests */}
              <button
                className="submit-btn"
                onClick={() => logoutUser()}
                disabled={isLoading}
              >
                Logout
              </button>
            </div>
          </CardFieldset>
        </form>
      </CardBody>
    </Wrapper>
  );
};

export default UserListCreation;
