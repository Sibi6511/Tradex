import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import homeGif from './homegif.gif'; // Import the GIF
import homeBackground from './homebackgro.mp4'; // Import the video

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const addTradingViewWidget = () => {
      const widgetContainer = document.getElementById('tradingview-widget');

      if (widgetContainer) {
        // Clear the previous widget script
        while (widgetContainer.firstChild) {
          widgetContainer.removeChild(widgetContainer.firstChild);
        }

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script.async = true;

        // Check if JSON configuration is valid
        try {
          const config = JSON.stringify({
            colorTheme: 'dark',
            dateRange: '12M',
            showChart: true,
            locale: 'en',
            width: '100%',
            height: '600',
            largeChartUrl: '',
            isTransparent: false,
            showSymbolLogo: true,
            showFloatingTooltip: false,
          });
          script.innerHTML = config;
        } catch (jsonError) {
          console.error('Error stringifying JSON config:', jsonError);
          return;
        }

        script.onerror = (error) => {
          console.error('Script load error:', error);
        };

        script.onload = () => {
          console.log('TradingView widget script loaded successfully');
        };

        widgetContainer.appendChild(script);
        console.log('Script added to widget container');
      } else {
        console.error('Widget container not found');
      }
    };

    // Adding a short delay before adding the script
    setTimeout(addTradingViewWidget, 1000);

    // Fetching trading news
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=trading&apiKey=33360ec9a8444d6998b63c09f4a37e5b&pageSize=3&sortBy=publishedAt`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNews(data.articles || []); // Ensure articles is an array
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching news:', error);
        setError(error.message); // Set the error message
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        {/* Background Video */}
        <video autoPlay loop muted className="background-video">
          <source src={homeBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1>Explore the Markets with Tradex</h1>
          <p>Get real-time data, powerful tools, and detailed analytics to stay ahead in the trading world.</p>
          <Link to="/signup" className="primary-button">
            Get Started
          </Link>
        </div>
      </section>

      {/* Data Display Section */}
      <section className="data-display">
        <h2>Market Overview</h2>
        <div id="tradingview-widget" className="tradingview-widget-container"></div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <h2>Today's Trading News</h2>
        <div className="news-list" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          {loading ? (
            <p>Loading news...</p>
          ) : error ? (
            <p>Error fetching news: {error}</p>
          ) : news.length ? (
            news.map((article, index) => (
              <div
                key={index}
                className="news-item"
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '10px',
                  padding: '15px',
                  margin: '10px 0',
                  flex: '1',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#fff',
                  transition: 'transform 0.2s',
                  cursor: 'pointer',
                  maxWidth: '30%',
                  minHeight: '150px',
                }}
                onClick={() => window.open(article.url, '_blank')}
              >
                <h3 style={{ color: '#333' }}>{article.title}</h3>
                <p style={{ color: '#555' }}>{article.description}</p>
              </div>
            ))
          ) : (
            <p>No news articles available.</p>
          )}
        </div>
      </section>

      {/* GIF Section */}
      <section className="gif-section" style={{ textAlign: 'center', marginTop: '20px' }}>
        <img src={homeGif} alt="Market overview" style={{ width: '600px', height: 'auto' }} />
      </section>
    </div>
  );
};

export default Home;
