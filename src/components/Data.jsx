// src/components/Data.jsx
import React, { useState } from 'react';

const Data = () => {
  const [symbol, setSymbol] = useState('IBM');
  const [interval, setInterval] = useState('5min');
  const [intradayData, setIntradayData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);
  const [monthlyData, setMonthlyData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    // Reset previous data and error states
    setIntradayData(null);
    setWeeklyData(null);
    setMonthlyData(null);
    setError(null);

    const apiKey = 'C6J1CYM2DW9G97JP';

    // Fetch Intraday Data
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setIntradayData(data['Time Series (5min)']))
      .catch(() => setError('Error fetching intraday data'));

    // Fetch Weekly Data
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setWeeklyData(data['Weekly Time Series']))
      .catch(() => setError('Error fetching weekly data'));

    // Fetch Monthly Data
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setMonthlyData(data['Monthly Time Series']))
      .catch(() => setError('Error fetching monthly data'));
  };

  return (
    <div style={{ backgroundColor: '#121212', color: '#E0E0E0', fontFamily: 'Roboto Slab, serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#F5A623' }}>Data Analyses</h1>

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter Stock Symbol"
          style={{
            padding: '10px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #F5A623',
            backgroundColor: '#1E1E1E',
            color: '#E0E0E0'
          }}
        />
        <select
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          style={{
            padding: '10px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #F5A623',
            backgroundColor: '#1E1E1E',
            color: '#E0E0E0'
          }}
        >
          <option value="1min">1min</option>
          <option value="5min">5min</option>
          <option value="15min">15min</option>
          <option value="30min">30min</option>
          <option value="60min">60min</option>
        </select>
        <button
          onClick={fetchData}
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#F5A623',
            color: '#121212',
            cursor: 'pointer'
          }}
        >
          Fetch Data
        </button>
      </div>

      {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}

      <div style={{ backgroundColor: '#1E1E1E', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ color: '#F5A623' }}>Intraday Data for {symbol}</h2>
        {intradayData ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {Object.entries(intradayData).slice(0, 5).map(([time, values]) => (
              <li key={time} style={{ marginBottom: '10px' }}>
                <strong>{time}</strong>: Open: {values['1. open']}, High: {values['2. high']}, Low: {values['3. low']}, Close: {values['4. close']}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading intraday data...</p>
        )}
      </div>

      <div style={{ backgroundColor: '#2E2E2E', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ color: '#F5A623' }}>Weekly Data for {symbol}</h2>
        {weeklyData ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {Object.entries(weeklyData).slice(0, 5).map(([time, values]) => (
              <li key={time} style={{ marginBottom: '10px' }}>
                <strong>{time}</strong>: Open: {values['1. open']}, High: {values['2. high']}, Low: {values['3. low']}, Close: {values['4. close']}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading weekly data...</p>
        )}
      </div>

      <div style={{ backgroundColor: '#3E3E3E', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#F5A623' }}>Monthly Data for {symbol}</h2>
        {monthlyData ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {Object.entries(monthlyData).slice(0, 5).map(([time, values]) => (
              <li key={time} style={{ marginBottom: '10px' }}>
                <strong>{time}</strong>: Open: {values['1. open']}, High: {values['2. high']}, Low: {values['3. low']}, Close: {values['4. close']}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading monthly data...</p>
        )}
      </div>
    </div>
  );
};

export default Data;
