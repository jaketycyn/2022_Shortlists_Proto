import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";

import Wrapper from "../assets/wrappers/List";
import DeletionModal from "../assets/modals/Deletion";
import styled from "styled-components";

const List = ({ _id, listTitle }) => {
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
      <div className="content-center">
        <div onClick={() => setAddUserListMode(_id)}>{listTitle}</div>
        <button
          type="delete"
          className="btn delete-btn"
          onClick={() => toggleModal(_id)}
        >
          Delete
        </button>
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
          <button className="delete" onClick={() => deleteUserCreatedList(_id)}>
            Yes
          </button>
          <button className="close" onClick={() => toggleModal()}>
            No
          </button>
        </DeletionModal>
      </div>
    </Wrapper>
  );
};

export default List;
