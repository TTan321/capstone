
// type
const GET_STOCKS = 'stocks/GET_SINGLE_STOCK'

// action
const getStocks = stocks => {
    return {
        type: GET_STOCKS,
        stocks
    }
}


// thunk action
export const loadAStock = () => async dispatch => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
    const data = await response.json()
    dispatch(getStocks(data))
    // const apiKey = 'cdg7p2qad3ie6d1pu4pgcdg7p2qad3ie6d1pu4q0'
    // const aaplResponse = await fetch(`https://finnhub.io/api/v1/quote?symbol=AAPL,MSFT,GOOG&token=${apiKey}`)
    // const aaplData = await aaplResponse.json()
    // aaplData.ticker = 'AAPL'
    // aaplData.name = 'Apple'


    // const msftResponse = await fetch(`https://finnhub.io/api/v1/quote?symbol=MSFT&token=${apiKey}`)

    // const msftData = await msftResponse.json()
    // msftData.ticker = 'MSFT'
    // msftData.name = 'Microsoft'


    // const googResponse = await fetch(`https://finnhub.io/api/v1/quote?symbol=GOOG&token=${apiKey}`)

    // const googData = await googResponse.json()
    // googData.ticker = 'GOOG'
    // googData.name = 'Google'


    // const amznResponse = await fetch(`https://finnhub.io/api/v1/quote?symbol=AMZN&token=${apiKey}`)

    // const amznData = await amznResponse.json()
    // amznData.ticker = 'AMZN'
    // amznData.name = 'Amazon'


    // const tslaResponse = await fetch(`https://finnhub.io/api/v1/quote?symbol=TSLA&token=${apiKey}`)

    // const tslaData = await tslaResponse.json()
    // tslaData.ticker = 'TSLA'
    // tslaData.name = 'Tesla'


    // const brkbResponse = await fetch(`https://finnhub.io/api/v1/quote?symbol=BRK-B&token=${apiKey}`)

    // const brkbData = await brkbResponse.json()
    // brkbData.ticker = 'BRK-B'
    // brkbData.name = 'Berkshire Hathaway'


    // const unhResponse = await fetch(`https://finnhub.io/api/v1/quote?symbol=UNH&token=${apiKey}`)
    // const unhData = await unhResponse.json()
    // unhData.ticker = 'UNH'
    // unhData.name = 'United Health'


    // const xomResponse = await fetch(`https://finnhub.io/api/v1/quote?symbol=XOM&token=${apiKey}`)

    // const xomData = await xomResponse.json()
    // xomData.ticker = 'XOM'
    // xomData.name = 'Exxon Mobil'


    // const jnjResponse = await fetch(`https://finnhub.io/api/v1/quote?symbol=JNJ&token=${apiKey}`)
    // const jnjData = await jnjResponse.json()
    // jnjData.ticker = 'JNJ'
    // jnjData.name = 'Johnson & Johnson'


    // const vResponse = await fetch(`https://finnhub.io/api/v1/quote?symbol=V&token=${apiKey}`)
    // const vData = await vResponse.json()
    // vData.ticker = 'V'
    // vData.name = 'Visa'

    // dispatch(getStocks([aaplData, msftData, googData, amznData, tslaData, brkbData, unhData, xomData, jnjData, vData]))
}

const assetReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_STOCKS:
            const stocks = {}
            action.stocks.forEach((stock, idx) => stocks[idx + 1] = stock)
            console.log('CRYPTOS: ', stocks)
            return stocks

        default:
            return state
    }
}

export default assetReducer
