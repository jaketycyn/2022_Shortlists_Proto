import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/List";

const List = ({ _id, listTitle }) => {
  const { setEditUserCreatedList, deleteUserCreatedList, setAddUserListMode } =
    useAppContext();

  return (
    <Wrapper>
      <div className="content-center">
        <div onClick={() => setAddUserListMode(_id)}>{listTitle}</div>
        <button
          type="delete"
          className="btn delete-btn"
          onClick={() => deleteUserCreatedList(_id)}
        >
          Delete
        </button>
      </div>
    </Wrapper>
  );
};

export default List;
