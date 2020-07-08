const cheerio = require("cheerio");

const overlayStyle = `
<style>
  .overlay {
    display: none;
    position: fixed;
    z-index: 99;
    padding: 100px 26px;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    overflow-y: scroll;
  }

  .overlay p {
    color: #000;
    font-family: sans-serif;
  }

  .overlay a {
    color: blue;
    text-decoration: underline;
  }
</style>
`;

const overlayMarkup = (url) => `
<div class="overlay">
  <p>Feeling outraged? Think again!</p>
  <p>This article was originally written about Trump.</p>
  <br/>
  <p>ObamaDidIt is a website that replaces the word "Trump" with the word "Obama".</p>
  <br/>
  <p>If this outraged you, make sure the real article also does: <a href="${url}">${url}</a></p>
</div>
`;

const overlayScript = `
<script>
  setTimeout(function() {
    document.getElementsByClassName("overlay")[0].style.display = "block";
  }, 20000);
</script>
`;

module.exports = async function appendOverlay(html, url) {
  const $ = cheerio.load(html);

  $("body").append(overlayMarkup(url));
  $("body").append(overlayScript);
  $("body").append(overlayStyle);

  return $.html();
};
