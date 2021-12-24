const Board = require("../models/Board");
const Column = require("../models/Column");
const Card = require("../models/Card");

// Create Board
exports.createBoard = async (req, res) => {
  try {
    let board = new Board(req.body); // Create board instance
    board = await board.save(req.body); // Save board to database

    let backlog = await new Column({
      name: "Backlog",
      board_id: board._id,
    }).save();

    let todo = await new Column({
      name: "To-Do",
      board_id: board._id,
    }).save();
    let inProgress = await new Column({
      name: "In Progress",
      board_id: board._id,
    }).save();
    let done = await new Column({
      name: "Done",
      board_id: board._id,
    }).save();

    await Board.findByIdAndUpdate(
      board._id,
      { $push: { columns: [backlog._id, todo._id, inProgress._id, done._id] } },
      { upsert: true }
    ); // Add column to project on database

    res.status(200).json({
      status: true,
      message: "Board successfully created with its columns",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get Board
exports.getBoard = async (req, res) => {
  try {
    let board = await Board.findById(req.query.board_id, { __v: 0 })
      .populate({ path: "columns", populate: { path: "cards", model: "Card" } })
      .exec(); // Get board and populate columns
    if (!board) {
      // If project not found, throw error
      res.status(404).json({ message: "This board is not exists." });
    } else {
      // If board found, send it
      res.status(200).json({ status: true, result: board });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Create Card

exports.createCard = async (req, res) => {
  try {
    let card = new Card(req.body);
    card = await card.save(req.body);
    await Column.findByIdAndUpdate(
      req.body.column_id,
      { $push: { cards: card._id } },
      { new: true, upsert: true }
    );
    res
      .status(200)
      .json({ status: true, message: "Card successfully created." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Remove existing card from column

exports.removeCardFromColumn = async (req, res) => {
  try {
    let { column_id, card_id } = req.body;
    await Column.findByIdAndUpdate(
      column_id,
      { $pull: { cards: card_id } },
      { new: true, upsert: true }
    );
    res.status(200).json({
      status: true,
      message: "Card successfully removed from specified column.",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add existing card to column
exports.addCardToColumn = async (req, res) => {
  try {
    let { column_id, card_id } = req.body;
    await Column.findByIdAndUpdate(
      column_id,
      { $push: { cards: card_id } },
      { new: true, upsert: true }
    );
    res.status(200).json({
      status: true,
      message: "Card successfully added to specified column",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//update the order of the cards in the column

exports.updateOrderCards = async (req, res) => {
  try {
    let { column_id, cards } = req.body;
    let column = await Column.findById(column_id);
    column.cards = cards;
    await column.save();

    res.status(200).json({
      status: true,
      message: "Updated the order of the cards in the column",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
