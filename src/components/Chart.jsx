import React, { useState, useEffect } from 'react';

const Chart = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStock, setSelectedStock] = useState('');
  const [topStocks, setTopStocks] = useState([
    { symbol: 'NASDAQ:AAPL', name: 'Apple Inc.' },
    { symbol: 'NASDAQ:GOOGL', name: 'Alphabet Inc.' },
    { symbol: 'NASDAQ:MSFT', name: 'Microsoft Corporation' },
    { symbol: 'NASDAQ:AMZN', name: 'Amazon.com, Inc.' },
    { symbol: 'NASDAQ:TSLA', name: 'Tesla, Inc.' },
    { symbol: 'NYSE:BRK.A', name: 'Berkshire Hathaway Inc.' },
    { symbol: 'NYSE:V', name: 'Visa Inc.' },
    { symbol: 'NASDAQ:NVDA', name: 'NVIDIA Corporation' },
    { symbol: 'NYSE:JPM', name: 'JPMorgan Chase & Co.' },
    { symbol: 'NYSE:DIS', name: 'The Walt Disney Company' }
  ]);

  useEffect(() => {
    if (selectedStock) {
      new window.TradingView.widget({
        container_id: "tradingview_chart",
        width: "100%",
        height: "600px",
        symbol: selectedStock,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
        studies: [
          "MACD@tv-basicstudies"
        ],
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650"
      });
    }
  }, [selectedStock]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedStock(searchTerm);
  };

  const handleStockClick = (symbol) => {
    setSelectedStock(symbol);
  };

  return (
    <div className='analyses-background'>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a stock..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="top-stocks">
        <h2>Top Stocks</h2>
        <ul>
          {topStocks.map((stock, index) => (
            <li key={index} onClick={() => handleStockClick(stock.symbol)}>
              {stock.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedStock && (
        <div id="tradingview_chart" style={{ width: '100%', height: '600px', marginTop: '20px' }}></div>
      )}
    </div>
  );
};

export default Chart;
