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

const ContributorListIndividual = ({ _id }) => {
  const {
    activeList,
    isLoading,
    clearAlert,
    insideList,
    clearValues,
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

  const [sendIsOpen, setSendIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

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
    e.preventDefault();

    if (!itemTitle) {
      displayAlert();
      return;
    }

    if (itemTitle) {
      createUserListItem();
      clearAlert();
      getUserCreatedListItems();
    }
    if (friendTitle && !itemTitle) {
      console.log("friend submit fired");

      sendListToFriend();
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
                      onClick={() => handleDeleteItem(item._id)}
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

export default ContributorListIndividual;
