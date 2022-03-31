import UserCustomListItem from "../models/UserCustomListItem.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnAuthenticatedError,
  NotFoundError,
} from "../errors/index.js";

const addItem = async (req, res) => {
  const { itemTitle, parentListId } = req.body;
  console.log("req.body");
  console.log(req.body);
  console.log(itemTitle);
  res.send("addItem");

  if (!itemTitle) {
    throw new BadRequestError("Please provide a name for your item");
  }

  req.body.createdById = req.user.userId;
  req.body.ownerId = req.user.userId;
  req.body.parentListId = parentListId;
  // All properties for item on creation listed below
  // req.body.ranking = 0;
  // req.body.potentialRanking = 0;
  // req.body.botBound = 0;
  // req.body.topBound = 0;

  const userItem = await UserCustomListItem.create(req.body);

  res.status(StatusCodes.CREATED).json({ userItem });
};

const addSentItems = async (req, res) => {
  const { sentListId, itemsToCopy, friendIdentifier } = req.body;
  console.log("req.body");
  console.log(req.body);
  console.log("req.body.sentListId");
  console.log(req.body.sentListId);
  console.log("req.body.itemsToCopy");
  console.log(req.body.itemsToCopy);

  const sentItems = req.body.itemsToCopy;
  console.log("sentItems");
  console.log(sentItems);

  sentItems.forEach(
    (item) =>
      (item.ownerId = friendIdentifier) && (item.parentListId = sentListId)
  );
  console.log("sentItems");
  console.log(sentItems);
  sentItems.forEach((item) => delete item._id);
  console.log("sentItems");
  console.log(sentItems);

  const sentUserItems = await UserCustomListItem.insertMany(sentItems);

  res.status(StatusCodes.CREATED).json({ sentUserItems });
};

const getAllItems = async (req, res) => {
  //const { parentListId } = req.params;

  // testing console logs
  // console.log("req.params");
  // console.log(req.params);
  // console.log("req.body");
  // console.log(req.body);
  // console.log("req.user");
  // console.log(req.user);
  // console.log("parentListId");
  // console.log(parentListId);

  //finding all items belong to user. Couldn't not figure out how a multi query works.
  //TODO RF: multi variable/property query to mongoDB. To find specific items from the list requested. And not all.
  const userCreatedItems = await UserCustomListItem.find({
    ownerId: req.user.userId,
    //parentListId: parentListId,
  });

  console.log("userCreatedListItems " + userCreatedItems);

  res.status(StatusCodes.OK).json({
    userCreatedItems,
    totalUserCreatedItems: userCreatedItems.length,
  });

  console.log("getAllItems");
};

const deleteItem = async (req, res) => {
  console.log("deleteItem");
  res.send("deleteItem");
};
const updateItem = async (req, res) => {
  console.log("updateItem");
  res.send("updateItem");
};

export { addItem, addSentItems, getAllItems, deleteItem, updateItem };