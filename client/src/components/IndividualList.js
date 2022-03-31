import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import styled from "styled-components";

import { FormRow, Alert } from "../components";

const IndividualList = () => {
  const {
    activeList,
    isLoading,
    clearAlert,
    displayAlert,
    showAlert,
    itemTitle,
    friendTitle,
    handleChange,
    createUserListItem,
    getUserCreatedListItems,
    userCreatedItems,
    sendListToFriend,
    createSentUserList,
    createSentUserListItems,
  } = useAppContext();

  const title = activeList[0].listTitle;

  //test setup use tutorial setup for final version.
  const handleSubmit = (e) => {
    //doing both friend title submit + item list submit in 1 submit button. Could be better to separate, but i believe by setting up explicit "if" statements with variables I'll be able to control for each use case.
    e.preventDefault();
    if (!itemTitle && !friendTitle) {
      displayAlert();
      return;
    }

    if (itemTitle && !friendTitle) {
      createUserListItem();
      //might put clear alert else where. This is for a nice popup notification to give user feedback. Could move this to within the reducer itself later.
      clearAlert();
      getUserCreatedListItems();
    }
    if (friendTitle && !itemTitle) {
      console.log("friend submit fired");

      sendListToFriend();
      //might put clear alert else where. This is for a nice popup notification to give user feedback. Could move this to within the reducer itself later.
      // clearAlert();
      // getUserCreatedListItems();
    }
  };

  const handleItemInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}: ${value}`)
    handleChange({ name, value });
  };

  useEffect(() => {
    getUserCreatedListItems();
    console.log("initial firing of getUserCreatedListItems");
  }, []);

  const parentListId = activeList[0]._id;
  const filteredListByParentId = userCreatedItems.filter(
    (item) => item.parentListId === parentListId
  );

  console.log("filteredListByParentId");
  console.log(filteredListByParentId);
  return (
    <CenterAlignWrapper>
      <IndividualListWrapper>
        <form className="form">
          <div>{title}</div>
          <FormRow
            type="text"
            labelText="Enter Friends Name"
            name="friendTitle"
            value={friendTitle}
            handleChange={handleItemInput}
          ></FormRow>
          <button
            type="submit"
            className="btn btn-block submit-btn"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Send List to Friend
          </button>
          <div className="form-center">
            {showAlert && <Alert />}
            <FormRow
              type="text"
              labelText="Add Items to list"
              name="itemTitle"
              value={itemTitle}
              handleChange={handleItemInput}
            ></FormRow>
            <div className="btn-container">
              <button
                type="submit"
                className="btn btn-block submit-btn"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                Add To List
              </button>

              <div>
                {filteredListByParentId.map((item) => {
                  return (
                    <div key={item._id} itemtitle={item.itemtitle}>
                      {item.itemTitle}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </form>
      </IndividualListWrapper>
    </CenterAlignWrapper>
  );
};

const CenterAlignWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: 200px;
  grid-template-areas:
    ". a a ."
    ". a a .";
`;

const IndividualListWrapper = styled.div`
  grid-area: a;
  align-self: center;
  justify-self: center;
  text-align: center;
`;

export default IndividualList;
