const cheerio = require("cheerio");

const modalStyle = `
<style>
  .modal {
    display: none;
    position: fixed;
    z-index: 99;
    padding: 100px 26px;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    color: #000;
    background-color: #fff;
    font-family: sans-serif;
  }
</style>
`;

const modalMarkup = (url) => `
<div class="modal">
  <p>Feeling outraged? Think again!</p>
  <p>This article was originally written about Trump.</p>
  <br/>
  <p>ObamaDidIt is a website that replaces the word "Trump" with the word "Obama".</p>
  <p>If this outraged you, you should reflect on your own biases.</p>
  <br />
  <p>See for yourself. Find the original at <a href="${url}">${url}</a></p>
</div>
`;

const modalScript = `
<script>
  setTimeout(function() {
    document.getElementsByClassName("modal")[0].style.display = "block";
  }, 20000);
</script>
`;

module.exports = async function appendModal(html, url) {
  const $ = cheerio.load(html);

  $("body").append(modalMarkup(url));
  $("body").append(modalScript);
  $("body").append(modalStyle);

  return $.html();
};
