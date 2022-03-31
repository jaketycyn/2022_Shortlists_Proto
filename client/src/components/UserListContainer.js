import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import List from "./List";
//jobscontainer wrapper/asset will need to be changed much later on to UserList and however we want to style it
import Wrapper from "../assets/wrappers/ListsContainer";
import UserListIndividual from "./UserListIndividual";

const UserListContainer = () => {
  const {
    isLoading,
    isAdding,
    activeList,
    userCreatedList,
    totalUserCreatedList,
    page,
    getUserCreatedLists,
  } = useAppContext();

  useEffect(() => {
    getUserCreatedLists();
  }, []);

  if (isAdding) {
    return (
      <Wrapper>
        <UserListIndividual />
      </Wrapper>
    );
  }

  if (totalUserCreatedList === 0) {
    return (
      <Wrapper>
        <div className="center-content">
          <h2>No Lists. Please create one above</h2>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalUserCreatedList} list {totalUserCreatedList.length > 1 && "s"}{" "}
        found
      </h5>
      <div className="lists">
        {userCreatedList.map((list) => {
          return <List key={list._id} {...list} />;
        })}
      </div>
    </Wrapper>
  );
};

export default UserListContainer;