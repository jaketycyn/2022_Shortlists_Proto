import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job";

const List = ({ _id, listTitle }) => {
  const { setEditUserCreatedList, deleteUserCreatedList, setAddUserListMode } =
    useAppContext();

  return (
    <Wrapper>
      <div onClick={() => setAddUserListMode(_id)}>{listTitle}</div>
      <button
        type="delete"
        className="btn delete-btn"
        onClick={() => deleteUserCreatedList(_id)}
      >
        Delete
      </button>
      <div>{_id}</div>
    </Wrapper>
  );
};

export default List;
