import { useAppContext } from "../pages/context/appContext";
import { useEffect } from "react";
import UserList from "./UserList";
//jobscontainer wrapper/asset will need to be changed much later on to UserList and however we want to style it
import Wrapper from "../display/styled/UserListsContainer";

import ContributorUserList from "./ContributorUserList";
import ContributorListIndividual from "./ContributorListIndividual";
import UserListIndividual from "./UserListIndividual";
import UserListCreation from "./UserListCreation";

const UserListContainer = () => {
  const { insideList, userContributorList, getUserCreatedListItems, user } =
    useAppContext();

  //

  const UserCreatedSocialLists = userContributorList.filter(
    (item) => item.contributors.length > 1 && item.createdById === user._id
  );

  const UserReceivedSocialLists = userContributorList.filter(
    (item) => item.contributors.length > 1 && item.createdById !== user._id
  );
  // console.log("UserSocialLists");
  // console.log(UserSocialLists);
  const UserTradLists = userContributorList.filter(
    (item) => item.contributors.length === 1
  );
  // console.log("UserTradLists");
  // console.log(UserTradLists);

  if (insideList === "created") {
    return (
      <Wrapper>
        <UserListIndividual />
      </Wrapper>
    );
  }

  if (insideList === "received") {
    return (
      <Wrapper>
        <ContributorListIndividual />
      </Wrapper>
    );
  }

  if (userContributorList.length === 0) {
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
      <h3>Social Lists created</h3>
      <div className="list-input">
        {UserCreatedSocialLists.map((list) => {
          return <UserList key={list._id} {...list} />;
        })}
      </div>
      {/* Will need to remove the delete button on the inside/share for these lists since we dont want users receiving to do anything other than add new items to it */}
      <h3>Social Lists received</h3>
      <div className="list-input">
        {UserReceivedSocialLists.map((list) => {
          return <ContributorUserList key={list._id} {...list} />;
        })}
      </div>
    </Wrapper>
  );
};

export default UserListContainer;
