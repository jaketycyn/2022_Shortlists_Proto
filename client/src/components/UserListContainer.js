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

  const UserSocialLists = userCreatedList.filter(
    (item) => item.contributors.length > 0
  );
  console.log("UserSocialLists");
  console.log(UserSocialLists);
  const UserTradLists = userCreatedList.filter(
    (item) => item.contributors.length === 0
  );
  console.log("UserTradLists");
  console.log(UserTradLists);
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
    <Wrapper className="userListContainerOrigin">
      <UserListCreation />
      <h3>Classic Lists</h3>
      <div className="list-input">
        {/* Previously mapped userCreatedList to show all lists. Now using filter on userCreatedList to show areas of trad lists vs social lists for testing purposes. */}
        {UserTradLists.map((list) => {
          return <UserList key={list._id} {...list} />;
        })}
      </div>
      <h3>Social Lists</h3>
      <div className="list-input">
        {UserSocialLists.map((list) => {
          return <UserList key={list._id} {...list} />;
        })}
      </div>
    </Wrapper>
  );
};

export default UserListContainer;
