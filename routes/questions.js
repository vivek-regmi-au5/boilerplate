const express = require("express");
const router = express.Router();
const Question = require("./../models/Question");

router.get("/", async (req, res) => {
	var questions = await Question.find();
	res.json(questions);
});

router.post("/", async (req, res) => {
	var { question, answer, options } = req.body;
	var question = new Question({
		question,
		answer,
		options,
	});
	var response = await question.save();
	res.json(response);
});

router.delete("/:id", async (req, res) => {
	await Question.findByIdAndRemove(req.params.if);
	res.json({ msg: "Item deleted" });
});

module.exports = router;
