import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../pages/context/appContext";

import Wrapper from "../display/styled/UserList";
import DeletionModal from "../display/modals/Deletion";
import SendToModal from "../display/modals/SendTo";
import styled from "styled-components";

import { FormRow } from ".";

import { Share } from "@styled-icons/bootstrap/Share";
import { Trash } from "@styled-icons/bootstrap/Trash";

const ContributorUserList = ({ _id, listTitle }) => {
  const {
    isLoading,
    friendTitle,
    handleChange,
    showAlert,

    getUserCreatedListItems,
    deleteUserCreatedList,
    setActiveList,
    setInsideList,
    sendListToFriend,
  } = useAppContext();

  const [sendIsOpen, setSendIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const goInsideList = async (_id) => {
    const status = "received";
    await setActiveList(_id, status);
    await setInsideList(status);
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

  const handleItemInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}: ${value}`)
    handleChange({ name, value });
  };

  //test setup use tutorial setup for final version.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (friendTitle) {
      console.log("friend submit fired");

      sendListToFriend();
      toggleSendModal();
    }
    if (!friendTitle) {
      //future error message
      console.log("incorrect input for sending to friend");
    }
  };

  useEffect(
    () => {
      getUserCreatedListItems();
      console.log("getUserCreatedListItems - UserList");
    },
    setTimeout([showAlert === true]),
    5000
  );
  //Addedtime out above so when no input is put it will display the alert error message for more inputs. otherwise it was auto retrieving lists nearly instantly.
  //
  return (
    <Wrapper>
      {/* List Title*/}
      <div className="main" onClick={() => goInsideList(_id)}>
        {listTitle}
      </div>

      {/* Delete List*/}
      <div>ContributorUserList</div>
      <div className="delete" onClick={() => toggleDeleteModal(_id)}>
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
          <h4>Delete this List?</h4>
          <button className="delete" onClick={() => deleteUserCreatedList(_id)}>
            Yes
          </button>
          <button className="close" onClick={() => toggleDeleteModal()}>
            No
          </button>
        </DeletionModal>
      </div>
    </Wrapper>
  );
};

export default ContributorUserList;
