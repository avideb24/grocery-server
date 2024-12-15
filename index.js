const app = require("./app");
const { PORT } = require("./src/configs/config");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
