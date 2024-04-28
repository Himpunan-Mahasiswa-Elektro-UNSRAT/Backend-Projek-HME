import express from "express";
import morganMiddleware from "./config/morganMiddleware";
import pengumumanRoute from "./routes/pengumuman.route";

const app = express();
const port = 6969;

app.use(morganMiddleware);
app.get("/", (req, res) => {
	res.send("Hello, TypeScript with Express!");
});

app.use('/pengumuman', pengumumanRoute);

app.listen(port, () => {
	console.log(
		`Server is running on http://localhost:${port}`
	);
});
