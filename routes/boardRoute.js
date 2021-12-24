const express = require("express");
const {
  createBoard,
  createCard,
  getBoard,
  updateOrderCards,
  addCardToColumn,
  removeCardFromColumn,
} = require("../controllers/boardController");

const router = express.Router();

router.route("/boards").post(createBoard);
router.route("/boards").get(getBoard);
router.route("/cards").post(createCard);
router.route("/addToColumn").post(addCardToColumn);
router.route("/removeFromColumn").post(removeCardFromColumn);
router.route("/updateCardOrder").post(updateOrderCards);

module.exports = router;
