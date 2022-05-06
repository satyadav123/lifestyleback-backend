const app = require("./index");

//importing connect
const connect = require("./configs/db");
const port = Process.env.PORT || 3000
app.listen(port, async function () {
	try {
		await connect();
		console.log("Listening to Port 5000");
	} catch (e) {
		console.error({ error: e.message });
	}
});
