import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const StockVideo3 = () => {
  return (
    <div className="stock-video">
      <h1 className="page-title">Why and How Do Companies List and What Is an IPO?</h1>
      <center>
        <h2 className="video-title">Video: What is an IPO?</h2>
      </center>
      <div className="video-section">
        <h2>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</h2>
        <Button>
          <a href="https://www.youtube.com/watch?v=6HoK7V7C9DI" target="_blank" rel="noopener noreferrer">
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
          Companies list their shares on stock exchanges for several reasons. The primary reason is to raise capital.
          Listing provides a company with access to public equity and enables it to grow and expand. Additionally,
          listing increases the company's visibility and credibility, and provides liquidity to existing shareholders.
          Companies that go public through an Initial Public Offering (IPO) offer their shares to the public for the
          first time. This process involves several steps, including regulatory approvals, pricing, and allocation.
        </p>

        <p>
          The IPO process involves:
          <ul>
            <li>Preparation: The company prepares its financial statements and business plans.</li>
            <li>Regulatory Filings: The company files necessary documents with regulatory authorities.</li>
            <li>Pricing: The company sets the price at which the shares will be offered to the public.</li>
            <li>Allocation: Shares are allocated to investors based on demand and other factors.</li>
            <li>Listing: The company's shares are listed on a stock exchange, and trading begins.</li>
          </ul>
        </p>

        <p>
          For more details on the IPO process and benefits of listing, visit the official page at{' '}
          <a href="https://zerodha.com/varsity/chapter/why-and-how-do-companies-list-and-what-is-an-ipo/" target="_blank" rel="noopener noreferrer">
            Zerodha Varsity
          </a>.
        </p>
      </div>
      <div className="navigation">
        <Link to="/stock-video-2" className="next-button">Previous</Link>
        &emsp;&emsp;&emsp;&emsp;
        <Link to="/stock-video1" className="next-button">Next</Link>
      </div>
    </div>
  );
};

export default StockVideo3;
