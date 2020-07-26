const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
	question: {
		type: String,
		required: true,
	},
	answer: {
		type: String,
		required: true,
	},
	options: [
		{
			type: String,
			required: true,
		},
	],
});
const Question = mongoose.model("question", questionSchema);

module.exports = Question;
