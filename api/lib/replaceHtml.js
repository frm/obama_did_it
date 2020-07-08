const axios = require("axios");
const absolutify = require("absolutify");
const appendModal = require("./appendModal");

const url = require("url");

module.exports = async function replaceHTML(targetUrl) {
  const { data } = await axios.get(targetUrl);

  const parsedUrl = url.parse(targetUrl);
  const rootUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;

  const html = absolutify(data, rootUrl)
    .replace(/trump/gi, "Obama")
    .replace(/donald/gi, "Barack");

  return appendModal(html, targetUrl);
};
