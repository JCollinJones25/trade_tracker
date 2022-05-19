# Project 3 - Frontend React App
## Stock Market Data - "Trade Tracker" 📈 🚀

## Description 
My app renders current stock market data to the user.

## Link to the API you plan to use
Click [here](https://www.stockdata.org/) to visit the API for StockData.org

## Example JSON
{
            "ticker": "TSLA",
            "name": "Tesla Inc",
            "exchange_short": "NASDAQ",
            "exchange_long": "NASDAQ Stock Exchange",
            "mic_code": "XNAS",
            "currency": "USD",
            "price": 764.63,
            "day_high": 787.17,
            "day_low": 751.77,
            "day_open": 773.8,
            "52_week_high": 1243.49,
            "52_week_low": 546.98,
            "market_cap": 731101265920
}

## Component hierarchy
![comp hierarchy](https://github.com/JCollinJones25/Project-3/blob/main/public/images/comp-hierarchy.png?raw=true)

## Wire Frames
![wireframe](https://github.com/JCollinJones25/Project-3/blob/main/public/images/wireframe.png?raw=true)

## User Stories
As a user, I want to see current stock market data.
As a user, I want a user-friendly UI that is easy to navigate.
As a user, I want to see visual aids such as charts or graphs.


### MVP Goals ✅
- Functional interactive features
- Data from third party API
- 4 Components
- Deployed on web and Github with hidden API key(s)
- React Router
- Styling

### Stretch Goals
- include API for a candlestick chart for each stock ✅
- another API for search bar to match ticker to stock name and show results ✅
- stock's current price changes color between green and red depending on previous price ✅
- buttons to change the x axis on the graph to either 1HR, 1D, 1W.
- Add stocks to a 'watch list' or 'favorites'
- User AUTH

## Existing Issues 
- API usage does not last long 
    - 4 total APIs
        - Graph and Search APIs have no limit
        - The two Stock info API's have the same endpoint with 100 daily use limit (with two for the same endpoint, that is cut in half)

- As of now, if you type in "apple" instead of "aapl" and click enter, you are brought to an error page. "Apple" shoudld be able to direct you to /aapl the same way "aapl" does. The API that provides the search results which include both ticker and name could be useful for that. But for now, having those search results populate and choosing Apple/aapl is an okay solution.

- Search state is one character behind

## Screenshots
