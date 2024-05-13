import express from "express";
import morganMiddleware from "./config/morganMiddleware";
import userProfileRoute from "./routes/userProfile.route";
// import userProfileRoute from "./routes/route";


const body = require('body-parser');
const app = express();
const port = 6969;

app.use(morganMiddleware);
app.get("/", (req, res) => {
	res.send("Hello, TypeScript with Express!");
});

app.use(body.json({
	limit: '500kb'
}));
app.use('/userProfile', userProfileRoute);


app.listen(port, () => {
	console.log(
		`Server is running on http://localhost:${port}`
	);
});
