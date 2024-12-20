const fse = require("fs-extra");
const multer = require("multer");

const dir = "upload/";
fse.ensureDirSync(dir);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
