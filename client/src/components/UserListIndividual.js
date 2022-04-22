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
  ShareIcon,
} from "../display/styled/UserListIndividual";
import { ItemHeader, ItemIcon, ItemWrapper } from "../display/styled/UserItems";
import { FormRow, Alert } from ".";

import SendToModal from "../display/modals/SendTo";
import DeletionModal from "../display/modals/Deletion";

import { Share } from "@styled-icons/bootstrap/Share";
import { Trash } from "@styled-icons/bootstrap/Trash";

const UserListIndividual = ({ _id }) => {
  const {
    activeList,
    allUserItems,
    isLoading,
    clearAlert,
    clearValues,
    displayAlert,
    showAlert,
    itemTitle,
    friendTitle,
    handleChange,
    createUserListItem,
    getUserCreatedListItems,
    deleteUserCreatedListItem,
    userOwnedItems,
    sendListToFriend,
  } = useAppContext();

  const [sendIsOpen, setSendIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState("");
  const [opacity, setOpacity] = useState(0);

  const parentListId = activeList[0]._id;
  const filteredListByParentId = allUserItems.filter(
    (item) => item.parentListId === parentListId
  );

  console.log("filteredListByParentId");
  console.log(filteredListByParentId);

  const deleteItemIdHandle = (id) => {
    console.log("before: " + deleteItemId);
    setDeleteItemId(id);
    console.log(deleteItemId);
    console.log("after: " + deleteItemId);
  };

  function toggleSendModal(e) {
    setOpacity(0);
    setSendIsOpen(!sendIsOpen);
  }

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

  const handleDeleteItem = async (id) => {
    await deleteUserCreatedListItem(id);
    await getUserCreatedListItems();
  };

  const handleItemInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}: ${value}`)
    handleChange({ name, value });
  };

  useEffect(() => {
    getUserCreatedListItems();
    console.log("getUserCreatedListItems - UserListIndividual");
  }, []);

  return (
    <Wrapper className="Origin">
      <form className="form" onSubmit={handleSubmit}>
        <CardHeader>
          <CardHeading>{title}</CardHeading>
          {showAlert && <Alert />}

          <ShareIcon onClick={() => clearValues()}>
            <Share onClick={() => toggleSendModal(_id)} />
          </ShareIcon>
          <SendToModal
            isOpen={sendIsOpen}
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            onBackgroundClick={toggleSendModal}
            onEscapeKeydown={toggleSendModal}
            opacity={opacity}
            backgroundProps={{ opacity }}
          >
            <h4>Enter Friend's contact info below:</h4>
            <FormRow
              className="center-align"
              type="text"
              labelText="Email:"
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
            <button className="close" onClick={() => toggleSendModal()}>
              Close
            </button>
          </SendToModal>

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
              Add Item
            </CardButton>
          </CardFieldset>
        </CardHeader>
        {/* Items */}
        {filteredListByParentId.length > 0 ? null : (
          <CardHeading>No items in list. Add one above</CardHeading>
        )}
        <div>
          {filteredListByParentId.map((item) => {
            return (
              <ItemWrapper key={item._id} itemtitle={item.itemtitle}>
                <ItemHeader>{item.itemTitle}</ItemHeader>

                <div
                  className="delete"
                  onClick={() => toggleDeleteModal(item._id)}
                >
                  <ItemIcon className="big">
                    <Trash />
                  </ItemIcon>
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
                      onClick={() => deleteItemIdHandle(item._id)}
                    >
                      {deleteItemId}
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
