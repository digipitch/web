const express = require('express');
const path = require('path');

const router = express.Router();
/* GET API Test List */

router.get('/api/getList', (req, res) => {
  const list = ['item1', 'item2', 'item3'];
  res.json(list);
  // eslint-disable-next-line no-console
  console.log('Sent list of items');
});

/* GET home page. */
router.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

/* GET home page.
router.get('*', (req, res) => {
  res.render('index');
});
*/
module.exports = router;
