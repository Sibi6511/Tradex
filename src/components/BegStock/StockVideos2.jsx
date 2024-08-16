import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const StockVideo2 = () => {
  return (
    <div className="stock-video">
      <h1 className="page-title">Who are the different participants in the market?</h1>
      <center>

        <h2 className="video-title">Video: Understanding Market Participants</h2>
      </center>
      <div className="video-section">

        <h2 className="video-title">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</h2>
        <Button>
          <a href="https://www.youtube.com/watch?v=nTrPeBBkxf8" target="_blank" rel="noopener noreferrer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8MLAID_TOCeujyWDd82l5gmIBgiJC_9LKQ&s" // YouTube logo image URL
              alt="YouTube Logo"
              className="youtube-logo"
            />
          </a>
        </Button>
      </div>

      <div className="content">
        <p>
          The stock market is a place where a diverse range of participants come together to buy and sell securities. These participants can be broadly classified into the following categories:
        </p>
        
        <h2>Market Participants</h2>
        <ul>
          <li><strong>Retail Investors:</strong> Individual investors who buy and sell securities for personal accounts.</li>
          <li><strong>Institutional Investors:</strong> Organizations such as mutual funds, pension funds, and insurance companies that invest large sums of money in the market.</li>
          <li><strong>Hedge Funds:</strong> Private investment funds that employ various strategies to earn returns for their investors.</li>
          <li><strong>Foreign Investors:</strong> Investors from outside the country who invest in domestic markets.</li>
          <li><strong>Market Makers:</strong> Entities that provide liquidity to the market by buying and selling securities.</li>
          <li><strong>Brokers:</strong> Intermediaries who facilitate transactions between buyers and sellers.</li>
        </ul>
        
        <h2>Role of SEBI</h2>
        <p>
          The Securities and Exchange Board of India (SEBI) regulates the stock market and ensures that the interests of investors are protected. SEBI sets the rules and regulations that all market participants must follow.
        </p>
        
        <h2>Key Takeaways</h2>
        <ul>
          <li>The stock market comprises various participants, each playing a unique role.</li>
          <li>Retail and institutional investors are the primary participants in the market.</li>
          <li>SEBI regulates the market to ensure fairness and transparency.</li>
        </ul>
        
        <p>
          For more details on the different actors in the market, visit the official page at <a href="https://zerodha.com/varsity/chapter/who-are-the-different-actors-in-market/" target="_blank" rel="noopener noreferrer">Zerodha Varsity</a>.
        </p>
      </div>

      <div className="navigation">
        <Link to="/stock-videos" className="prev-button">Previous</Link>
        &emsp;&emsp;&emsp;&emsp;
        <Link to="/stock-video-3" className="next-button">Next</Link>
      </div>
    </div>
  );
};

export default StockVideo2;
