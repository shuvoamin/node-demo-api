const data = require('../db/data');

// should return all positions from db including portfolio 
const allPositionsAndPortfolios = (reqCurrency) => {

    let queryData = [];
    let positions = data.positions;
    let portfolios = data.portfolios;

    for(let i = 0; i < positions.length; i++){

        let position = positions[i];
        let posPortId = position.portfolioId;
        let posCurrency = position.currency;        

        for(let j = 0; j < portfolios.length; j++){

            let portfolio = portfolios[j];
            let portId = portfolio.id;

            if (posPortId === portId){
                position.portfolio = portfolio;
            }
        }

        if(reqCurrency) {
    
            if (posCurrency.toLowerCase() !== reqCurrency.toLowerCase()){ 
                position = null;
            }

        }

        if (position !== null)
            queryData.push(position);        

    }

    return queryData;

}

// expose only relevant data to client
module.exports = {
    allPositionsAndPortfolios
}