import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const StockVideo1 = () => {
  return (
    <div className="stock-video-page">
      <header className="header">
        <h1>Why Should You Invest?</h1>
      </header>

      <section className="video-section">
        <h2>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</h2>
        <Button>
          <a href="https://www.youtube.com/watch?v=CS4_49qeaeU" target="_blank" rel="noopener noreferrer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8MLAID_TOCeujyWDd82l5gmIBgiJC_9LKQ&s" // YouTube logo image URL
              alt="YouTube Logo"
              className="youtube-logo"
            />
          </a>
        </Button>
      </section>

      <section className="content-section">
        <p>
          Why should one invest in financial markets? This chapter explores the reasons for investing, including the potential for higher returns, wealth creation, and protection against inflation.
        </p>

        <h2>What is Investing?</h2>
        <p>
          Investing involves committing money or capital to an endeavor with the expectation of obtaining additional income or profit. Unlike consumption, investing allocates resources to earn a return.
        </p>

        <h2>Key Benefits of Investing</h2>
        <ul>
          <li>Wealth Creation: Investing helps build long-term wealth.</li>
          <li>Inflation Protection: Investing can help protect your money from losing value due to inflation.</li>
          <li>Achieving Financial Goals: Investing can help achieve financial goals such as buying a home, retirement, or children's education.</li>
        </ul>

        <h2>How to Start Investing?</h2>
        <p>
          To start investing, one should educate themselves about financial markets, understand their risk tolerance, set clear investment goals, and select appropriate investment vehicles.
        </p>

        <h2>Risks of Investing</h2>
        <p>
          All investments carry some level of risk, including the potential loss of principal invested. It's important to understand these risks and diversify your portfolio to manage them effectively.
        </p>
      </section>
           
      <div className="navigation">
        <Link to="/stock-video-2"id className="next-button">Next</Link>
      </div>
    </div>
  );
};

export default StockVideo1;
