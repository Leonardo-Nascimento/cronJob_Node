const express = require('express');
const app = express();
const port = 3000;
const { v4 } = require('uuid');


app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

// app.listen(port, () => {
//   console.log(`Web service listening at http://localhost:${port}`);
// });
