const axios = require("axios");
const absolutify = require("absolutify");
const url = require("url");

const appendOverlay = require("./appendOverlay");

const randomString = () => Math.random().toString(36).substring(2, 15);

module.exports = async function replaceHTML(targetUrl) {
  const { data } = await axios.get(targetUrl);

  const parsedUrl = url.parse(targetUrl);
  const rootUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;

  const barack = randomString();
  const obama = randomString();

  const html = absolutify(data, rootUrl)
    .replace(/barack/gi, barack)
    .replace(/obama/gi, obama)
    .replace(/donald/gi, "Barack")
    .replace(/trump/gi, "Obama")
    .replace(new RegExp(barack, "g"), "Donald")
    .replace(new RegExp(obama, "g"), "Trump")
    .replace(/(Barack)\s+J\.?\s+(Obama)/g, "$1 $2");

  return appendOverlay(html, targetUrl);
};
