# Trade Tracker 📈 🚀

## Overview 
Trade Tracker is a an app built using React which implements multiple API calls to display current stock market data.

## Links
- Click [here](https://trade-tracker-stocks.herokuapp.com/) to visit the site.
- Click [here](https://www.stockdata.org/) to visit the API for StockData.org.
- Click [here](https://tickersearch.surge.sh/) to visit the API for ticker search.
- Click [here](https://apexcharts.com/react-chart-demos/candlestick-charts/category-x-axis/) to visit the API for Apex Charts.

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
    - 3 total APIs.
    - Graph and Search APIs have no limit.
    - The API I use for the stock information has two differnet endpoints and has a 100 daily use limit.

- As of now, if you type in "apple" instead of "aapl" and click enter, you are brought to an error page. "Apple" shoudld be able to direct you to /aapl the same way "aapl" does. The API that provides the search results which include both ticker and name could be useful for that. But for now, having those search results populate and choosing Apple/aapl is an okay solution.

- Search state is one character behind.

## Screenshots
![home screen](https://github.com/JCollinJones25/Project-3/blob/main/public/images/home-screen.png?raw=true)
![stock page](https://github.com/JCollinJones25/Project-3/blob/main/public/images/stock-page.png?raw=true)
![search](https://github.com/JCollinJones25/Project-3/blob/main/public/images/search.png?raw=true)
![chart](https://github.com/JCollinJones25/Project-3/blob/main/public/images/chart.png?raw=true)
