const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect(
	`mongodb+srv://vivek:YsHgZ2uv6FDBk4sp@cluster0-wmlsu.mongodb.net/<dbname>?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	},
	() => {
		console.log("connected to database");
	}
);

app.get("/", (req, res) => {
	res.send("Test");
});

app.use("/question", require("./routes/questions"));

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`);
});
