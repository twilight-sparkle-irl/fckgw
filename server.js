// server.js
// where your node app starts

// init project
const express = require('express');
const fetch = require('node-fetch')
const app = express();
const {sleep} = require('./util');

// header that makes the random images and background images not display
// as well as scrolling the page down automatically
const header = `<style>
    img {
        display: none;
    }

    body {
        background-image: none !important;
        background: black;
        color: white
    }
</style>
<script>
    setInterval(function() {
        window.scrollTo(0, document.body.scrollHeight);
    }, 1000)
</script>
`

app.get('/', async function(req, res) {
  _send_heading(req,res)
  var head_loaded = false
  res.write(header)
  let yy = await (await fetch('https://www.yyyyyyy.info/')).text()
  let yychunks = y.match(/.{1,10}/g);
  for(x of yychunks) {
    if(!head_loaded && (x.includes('</head') || x.includes('<img') || x.includes('<body'))){head_loaded=true}
    [...x].forEach(x=>res.write(x));
    if(head_loaded){await sleep(Math.floor(Math.random()*350))}
  }
});

function _send_heading(req,res) {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf8",
    "Cache-control": "no-cache",
    "Connection": "keep-alive",
    "transfer-encoding": "chunked"
  });
}

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
