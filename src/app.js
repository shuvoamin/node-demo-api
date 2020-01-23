const express = require('express');
const positionSvc = require('./services/position-svc');
const runTests = require('../tests/index.test.js');

const app = express();

app.get('/', (req, res) => {  
  res.send('You can open the above link in a new tab and append /test or /portfolios to see the server result');
});

app.get('/test', (req, res) => {  
  const testResult = runTests();
  res.json(testResult);
});

app.get('/api/v1/portfolios', (req, res) => {

  try {

    const reqCurrency = req.query.currency;
    const portfolioData = positionSvc.getPositions(reqCurrency);

    res.status(200).send({
      portfolioData
    })

  } catch (error) {

    // log the exception
    res.status(500).send({
    })

  }

});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});