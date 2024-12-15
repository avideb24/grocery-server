// const app = require("./app");
// const { PORT } = require("./src/configs/config");

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// index.js
const app = require("./app");

// Export the app for Vercel to handle the routing
module.exports = app;

