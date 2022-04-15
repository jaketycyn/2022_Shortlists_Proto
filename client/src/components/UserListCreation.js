import { useState, useEffect } from "react";
import { useAppContext } from "../pages/context/appContext";
import TradListModal from "../display/modals/TradList";
import SocialListModal from "../display/modals/SocialList";

import {
  Wrapper,
  CardBody,
  CardFieldset,
  CardInput,
} from "../display/styled/UserListCreation";
import { Alert, FormRow } from ".";

const UserListCreation = () => {
  const {
    clearValues,
    isLoading,
    logoutUser,
    friendTitle,
    clearAlert,
    displayAlert,
    showAlert,
    listTitle,
    handleChange,
    createUserList,
    createUserSocialList,
    getUserCreatedLists,
  } = useAppContext();

  const [tradIsOpen, setTradIsOpen] = useState(false);
  const [socialIsOpen, setSocialIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  //test setup use tutorial setup for final version.
  const handleSubmitTradList = async (e) => {
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

    setTradIsOpen(false);
  };

  const handleSubmitSocialList = async (e) => {
    e.preventDefault();
    if (!listTitle) {
      displayAlert();
      setTimeout(5000);
      return;
    }
    await createUserSocialList();
    await getUserCreatedLists();
    await clearAlert();
    setSocialIsOpen(false);
  };

  const handleListInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}: ${value}`)
    handleChange({ name, value });
  };

  function toggleTradListModal(e) {
    e.preventDefault();
    setOpacity(0);
    setTradIsOpen(!tradIsOpen);
  }

  function toggleSocialListModal(e) {
    e.preventDefault();
    setOpacity(0);
    setSocialIsOpen(!socialIsOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  useEffect(() => {
    getUserCreatedLists();
  }, []);

  return (
    <Wrapper>
      {/* Will be seperate userListCreation component later */}

      <CardBody>
        <CardFieldset>
          {/* TradListModal*/}
          <div>
            <button onClick={(e) => clearValues()}>
              <div onClick={(e) => toggleTradListModal(e)}>
                Create Classic List
              </div>
            </button>

            <TradListModal
              isOpen={tradIsOpen}
              afterOpen={afterOpen}
              beforeClose={beforeClose}
              onBackgroundClick={toggleTradListModal}
              onEscapeKeydown={toggleTradListModal}
              opacity={opacity}
              backgroundProps={{ opacity }}
            >
              <form>
                {showAlert && <Alert />}
                <CardInput
                  placeholder="Enter a new list name"
                  type="text"
                  labelText="Enter new list name"
                  name="listTitle"
                  value={listTitle}
                  onChange={handleListInput}
                />
                <button className="submit" onClick={handleSubmitTradList}>
                  Submit
                </button>
                <button
                  className="close"
                  onClick={(e) => toggleTradListModal(e)}
                >
                  Close
                </button>
              </form>
            </TradListModal>
          </div>

          <div>
            <button onClick={(e) => clearValues()}>
              <div onClick={(e) => toggleSocialListModal(e)}>
                Create Social List
              </div>
            </button>
            {/*Social List Modal*/}
            <SocialListModal
              isOpen={socialIsOpen}
              afterOpen={afterOpen}
              beforeClose={beforeClose}
              onBackgroundClick={toggleSocialListModal}
              onEscapeKeydown={toggleSocialListModal}
              opacity={opacity}
              backgroundProps={{ opacity }}
            >
              <form>
                {showAlert && <Alert />}
                <CardInput
                  placeholder="Enter a new list name"
                  type="text"
                  labelText="Enter new list name"
                  name="listTitle"
                  value={listTitle}
                  onChange={handleListInput}
                />
                <CardInput
                  placeholder="Friend's Email:"
                  type="text"
                  labelText="Friend's Email:"
                  name="friendTitle"
                  value={friendTitle}
                  onChange={handleListInput}
                />

                <button className="submit" onClick={handleSubmitSocialList}>
                  Submit
                </button>
                <button
                  className="close"
                  onClick={(e) => toggleSocialListModal(e)}
                >
                  Close
                </button>
              </form>
            </SocialListModal>
          </div>
          <button
            className="submit-btn"
            onClick={() => logoutUser()}
            disabled={isLoading}
          >
            Logout
          </button>
        </CardFieldset>
      </CardBody>
    </Wrapper>
  );
};

export default UserListCreation;
