import React from 'react';

const brokers = [
  {
    name: 'Zerodha',
    description: 'Zerodha is India\'s largest retail stockbroker, offering brokerage-free equity investments, retail, and institutional broking, currencies, and commodities trading.',
    url: 'https://zerodha.com/',
    features: ['Brokerage-free', 'Equity', 'Commodities']
  },
  {
    name: 'Groww',
    description: 'Groww is a popular investment platform in India that allows users to invest in stocks, mutual funds, and digital gold, offering a user-friendly interface and seamless experience.',
    url: 'https://groww.in/',
    features: ['Stocks', 'Mutual Funds', 'Digital Gold']
  },
  {
    name: 'Upstox',
    description: 'Upstox is a technology-first low-cost brokerage firm in India providing trading in stocks, derivatives, commodities, currencies, mutual funds, and ETFs.',
    url: 'https://upstox.com/',
    features: ['Low-cost', 'Derivatives', 'ETFs']
  },
  {
    name: 'Angel One',
    description: 'Angel One is a full-service retail broking house in India offering investment and trading services to its clients with personalized advisory services.',
    url: 'https://www.angelone.in/',
    features: ['Full-service', 'Advisory', 'Retail Broking']
  },
  {
    name: 'ICICI Direct',
    description: 'ICICI Direct is a retail trading and investment service from ICICI Securities, offering a wide range of investment options such as stocks, derivatives, currency, and mutual funds.',
    url: 'https://www.icicidirect.com/',
    features: ['Comprehensive', 'Currency', 'Derivatives']
  },
  {
    name: 'HDFC Securities',
    description: 'HDFC Securities is a subsidiary of HDFC Bank, providing a host of services including equity trading, mutual funds, fixed deposits, NPS, and much more.',
    url: 'https://www.hdfcsec.com/',
    features: ['Equity', 'Fixed Deposits', 'NPS']
  },
  {
    name: '5paisa',
    description: '5paisa is an affordable trading platform offering various services like stock trading, mutual funds, insurance, and research-based investment advice.',
    url: 'https://www.5paisa.com/',
    features: ['Affordable', 'Insurance', 'Research Advice']
  },
  {
    name: 'Kotak Securities',
    description: 'Kotak Securities, a subsidiary of Kotak Mahindra Bank, offers a comprehensive suite of investment options including stocks, derivatives, and mutual funds.',
    url: 'https://www.kotaksecurities.com/',
    features: ['Comprehensive', 'Stocks', 'Mutual Funds']
  },
  {
    name: 'Motilal Oswal',
    description: 'Motilal Oswal Securities is a diversified financial services firm offering a range of financial products and services including equity, commodities, and currency trading.',
    url: 'https://www.motilaloswal.com/',
    features: ['Diversified', 'Commodities', 'Equity']
  },
  {
    name: 'Sharekhan',
    description: 'Sharekhan is one of India’s leading brokerage firms offering a variety of services including stock broking, portfolio management, research, and financial services.',
    url: 'https://www.sharekhan.com/',
    features: ['Leading', 'Portfolio Management', 'Research']
  }
];

const Trade = () => {
  return (
    <div className="trade-page">
      <h1 className="title">Best Indian Brokers</h1>
      <div className="broker-list">
        {brokers.map((broker, index) => (
          <div key={index} className="broker-item">
            <h2>
              <a href={broker.url} target="_blank" rel="noopener noreferrer">
                {broker.name}
              </a>
            </h2>
            <p>{broker.description}</p>
          </div>
        ))}
      </div>

      {/* Comparison Section */}
      <h2 className="comparison-title">Comparison of Broker Apps</h2>
      <div className="comparison-table">
        <div className="comparison-header">
          <span>Name</span>
          <span>Key Features</span>
        </div>
        {brokers.map((broker, index) => (
          <div key={index} className="comparison-row">
            <span>{broker.name}</span>
            <span>{broker.features.join(', ')}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trade;
