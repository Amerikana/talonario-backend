const {Router} = require('express');
const {readdirSync} = require('fs');
const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (fileName) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    router.use(`/${cleanName}`, require(`./${cleanName}`))
  }
});

module.exports = {router}