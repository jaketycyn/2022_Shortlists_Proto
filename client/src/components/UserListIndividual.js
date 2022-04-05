import { useAppContext } from "../pages/context/appContext";
import { useState, useEffect } from "react";
import styled from "styled-components";

import {
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink,
} from "../display/styled/UserListIndividual";
import ItemWrapper from "../display/styled/UserItems";
import { FormRow, Alert } from ".";

import DeletionModal from "../display/modals/Deletion";

import { Trash } from "@styled-icons/bootstrap/Trash";

const UserListIndividual = ({ _id }) => {
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
    deleteUserCreatedListItem,
    userCreatedItems,
    sendListToFriend,
  } = useAppContext();

  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleDeleteModal(e) {
    setOpacity(0);
    setDeleteIsOpen(!deleteIsOpen);
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
    <Wrapper className="Origin">
      <form className="form" onSubmit={handleSubmit}>
        <CardHeader>
          <CardHeading>{title}</CardHeading>
          {showAlert && <Alert />}
          <CardFieldset>
            <CardInput
              type="text"
              placeholder="Enter Friends Name"
              name="friendTitle"
              value={friendTitle}
              onChange={handleItemInput}
            />
          </CardFieldset>

          <CardFieldset>
            <CardButton
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Send List to Friend
            </CardButton>
          </CardFieldset>
          <CardFieldset>
            <CardInput
              type="text"
              placeholder="Add Items to list"
              name="itemTitle"
              value={itemTitle}
              onChange={handleItemInput}
            />
          </CardFieldset>

          <CardFieldset>
            <CardButton
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Send List to Friend
            </CardButton>
          </CardFieldset>
        </CardHeader>
        {/* Items */}
        <div>
          {filteredListByParentId.map((item) => {
            return (
              <ItemWrapper key={item._id} itemtitle={item.itemtitle}>
                {item.itemTitle}
                <div
                  className="delete"
                  onClick={() => toggleDeleteModal(item._id)}
                >
                  <Trash />
                  {/* Delete Modal */}
                  <DeletionModal
                    isOpen={deleteIsOpen}
                    afterOpen={afterOpen}
                    beforeClose={beforeClose}
                    onBackgroundClick={toggleDeleteModal}
                    onEscapeKeydown={toggleDeleteModal}
                    opacity={opacity}
                    backgroundProps={{ opacity }}
                  >
                    <h4>Delete this Item?</h4>
                    <button
                      className="delete"
                      onClick={() => deleteUserCreatedListItem(item._id)}
                    >
                      Yes
                    </button>
                    <button
                      className="close"
                      onClick={() => toggleDeleteModal()}
                    >
                      No
                    </button>
                  </DeletionModal>
                </div>
              </ItemWrapper>
            );
          })}
        </div>
      </form>
    </Wrapper>
  );
};

export default UserListIndividual;
