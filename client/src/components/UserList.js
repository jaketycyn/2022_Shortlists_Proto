import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../pages/context/appContext";

import Wrapper from "../assets/wrappers/UserList";
import DeletionModal from "../assets/modals/Deletion";
import styled from "styled-components";

import { Share } from "@styled-icons/bootstrap/Share";
import { Trash } from "@styled-icons/bootstrap/Trash";

const UserList = ({ _id, listTitle }) => {
  const { setEditUserCreatedList, deleteUserCreatedList, setAddUserListMode } =
    useAppContext();

  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e) {
    setOpacity(0);
    setIsOpen(!isOpen);
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

  return (
    <Wrapper>
      {/* List Title*/}
      <div className="main" onClick={() => setAddUserListMode(_id)}>
        {listTitle}
      </div>
      {/* List Title*/}
      <div className="secondary">
        <Share
          className="share"
          onClick={() => console.log("clicking share button")}
        >
          Share Item Icon
        </Share>
        {/* Delete List*/}

        <div className="delete" onClick={() => toggleModal(_id)}>
          <Trash />
          {/* Delete Modal */}
          <DeletionModal
            isOpen={isOpen}
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
            opacity={opacity}
            backgroundProps={{ opacity }}
          >
            <h4>Delete this List?</h4>
            <button
              className="placeholder"
              onClick={() => deleteUserCreatedList(_id)}
            >
              Yes
            </button>
            <button className="close" onClick={() => toggleModal()}>
              No
            </button>
          </DeletionModal>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserList;
