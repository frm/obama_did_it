const { replaceHTML } = require("../lib");

exports.handler = async (event, _context) => {
  const { url } = event.queryStringParameters;

  const alteredHTML = await replaceHTML(url);

  return {
    statusCode: 200,
    contentType: "text/html",
    body: alteredHTML,
  };
};
