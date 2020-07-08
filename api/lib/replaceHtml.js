const axios = require("axios");
const absolutify = require("absolutify");
const cheerio = require("cheerio");

const url = require("url");

const alertText =
  "Feeling outraged? Think again!\\nThis article was originally written about Trump.\\nObamaDidIt is a website that replaces the word \"Trump\" with the word \"Obama\".\\nIf this outraged you, I would reflect on your own biases.";

const alert = `
  <script>
    setTimeout(function() {
      alert('${alertText}')
    }, 10000);
  </script>
`;

module.exports = async function replaceHTML(targetUrl) {
  const { data } = await axios.get(targetUrl);

  const parsedUrl = url.parse(targetUrl);
  const rootUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;

  const html = absolutify(data, rootUrl).replace(/trump/gi, "Obama");

  const $ = cheerio.load(html);

  $("body").append(alert);

  return $.html();
};
