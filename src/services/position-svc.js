const positionRepo = require('../repository/portfolio-repo');

// ideally all validations should occur in service layer
const getPositions = (reqCurrency) => {

  // should return only limited data at once
  // should validate reqCurrency is valid value

  return positionRepo.allPositionsAndPortfolios(reqCurrency);

}

module.exports = {
  getPositions
}