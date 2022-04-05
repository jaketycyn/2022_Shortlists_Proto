import { useAppContext } from "../pages/context/appContext";
import { useEffect } from "react";
import UserList from "./UserList";
//jobscontainer wrapper/asset will need to be changed much later on to UserList and however we want to style it
import Wrapper from "../display/styled/UserListsContainer";
import UserListIndividual from "./UserListIndividual";
import UserListCreation from "./UserListCreation";

const UserListContainer = () => {
  const {
    isLoading,
    insideList,
    activeList,
    userCreatedList,
    totalUserCreatedList,
    page,
    getUserCreatedLists,
  } = useAppContext();

  useEffect(() => {
    getUserCreatedLists();
  }, []);

  if (insideList) {
    return (
      <Wrapper>
        <UserListIndividual />
      </Wrapper>
    );
  }

  if (totalUserCreatedList === 0) {
    return (
      <Wrapper>
        <UserListCreation />
        <div className="center-content">
          <h2>No Lists. Please create one above</h2>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {/* Hidding for now. Also will need to fix plurality later
      <h5 className="list-total-display">
        {totalUserCreatedList} list {totalUserCreatedList.length > 1 && "s"}{" "}
        found
      </h5>
       */}
      <UserListCreation />
      <div className="list-input">
        {userCreatedList.map((list) => {
          return <UserList key={list._id} {...list} />;
        })}
      </div>
    </Wrapper>
  );
};

export default UserListContainer;
