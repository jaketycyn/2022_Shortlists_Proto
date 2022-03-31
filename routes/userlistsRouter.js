import express from "express";
const userlistsRouter = express.Router();

import {
  createList,
  getAllLists,
  createSentList,
  getSentListId,
  updateList,
  deleteList,
  showListInfo,
} from "../controllers/userlistController.js";

userlistsRouter.route("/").post(createList).get(getAllLists);
//remember about :id
userlistsRouter.route("/info").get(showListInfo);
userlistsRouter.route("/:listId").delete(deleteList).patch(updateList);
userlistsRouter.route("/createSentList").post(createSentList);
userlistsRouter
  .route("/createSentList/:friendIdentifier/:listCreatorId/:sentListTitle")
  .get(getSentListId);

export default userlistsRouter;
